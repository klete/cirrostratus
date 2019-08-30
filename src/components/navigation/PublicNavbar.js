import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';

import { userHasAuthenticated } from '../../store/actions';
import { handleLogout } from '../../utils';

// import './PublicNavbar.css';


class PublicNavbar extends Component {
  render() {
    const showLoginLink = this.props.location.pathname !== '/login';
    const links = this.props.isAuthenticated ? <Nav.Link onClick={handleLogout(this.props)}>Logout</Nav.Link> : showLoginLink ? <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer> : null;

    return (
        <div className="PublicNavbar">
          <Navbar expand="lg" fixed="top">

            <Navbar.Brand>
              <Link to="/">CirroStratus</Link>
            </Navbar.Brand>

            <Navbar.Toggle 
              aria-controls="basic-navbar-nav" 
              id="public-navbar"
            />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navbar-nav ml-auto mt-lg-0">
                {links}
              </Nav>
            </Navbar.Collapse>

          </Navbar>
        </div>      
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.appReducer.isAuthenticated,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userHasAuthenticated: (authenticated) => dispatch(userHasAuthenticated(authenticated)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PublicNavbar));