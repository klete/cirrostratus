import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Auth from "@aws-amplify/auth";

import Routes from './Routes';

import { userHasAuthenticated } from './store/actions';

import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticating: true,
    };
  }

  async componentDidMount() {
    // try {
    //   await Auth.currentSession();
    //   this.props.userHasAuthenticated(true);
    // }
    // catch(e) {
    //   if (e !== 'No current user') {
    //     alert(e);
    //   }
    // }
  
    this.setState({ isAuthenticating: false });
  }
  
  render () {
    return (
      !this.state.isAuthenticating &&
        <div className="App">
          <Routes />    
        </div> 
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userHasAuthenticated: (authenticated) => dispatch(userHasAuthenticated(authenticated)),    
  };
};

export default connect(null, mapDispatchToProps)(App);
