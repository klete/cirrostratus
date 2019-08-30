// import React, { Component } from 'react';
import React, { useState } from 'react';
import { Container, Row, Col, Card, FormControl, Form, FormGroup, Toast } from "react-bootstrap";
// import Auth from "@aws-amplify/auth";
import { connect } from 'react-redux';

import PublicNavbar from './navigation/PublicNavbar';
import LoginButton from './navigation/LoginButton';

import { userHasAuthenticated } from '../store/actions';

import './Login.css';

const Login = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const [loginFailedMessage, setLoginFailedMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
  
    setIsLoading(true);

    try {
      // await Auth.signIn(username, password);
      // this.props.userHasAuthenticated(true);
      // this.props.history.push("/batches");
      handleLoginFailed({message: 'Login failed'});
    } catch (e) {
      handleLoginFailed(e);
    }

    setIsLoading(false);
  }

  const handleLoginFailed = (e) => {
    setIsLoading(false);
    setLoginFailed(true);
    setLoginFailedMessage(e.message);
  }

  const validateForm = () => {
    return (username.length > 0 && password.length > 0);
  }

  const closeLoginFailedToast = () => {
    setLoginFailed(false);
    setLoginFailedMessage("");
  }

  return (
    <>
      <PublicNavbar />
      <main className="Login">
      
        <Container>
          <Row>
            <Col md={6} className="mx-auto">
              <Card>
                <Card.Header>
                  <h4>Admin Login</h4>
                </Card.Header>
                <Card.Body>
                  <form onSubmit={handleSubmit}>
                    <FormGroup controlId="username">
                      <Form.Label>Username</Form.Label>
                      <FormControl 
                        data-test="input-username"
                        type="username" 
                        value={username}
                        onChange={evt => setUsername(evt.target.value)}
                      />
                    </FormGroup>
                    <FormGroup controlId="password">
                      <Form.Label>Password</Form.Label>
                      <FormControl 
                        data-test="input-password"
                        type="password" 
                        value={password}
                        onChange={evt => setPassword(evt.target.value)}
                      />
                    </FormGroup>
                    <LoginButton
                      data-test="button-login"
                      block
                      size="lg"
                      disabled={!validateForm()}
                      type="submit"
                      isLoading={isLoading}
                      text="Login"
                      loadingText="Logging in…"
                    />
                  </form>
                </Card.Body>
              </Card>                
            </Col>              
          </Row>
        </Container>
      
        <Toast id="loginFailedToast" show={loginFailed} onClose={closeLoginFailedToast} delay={8000} autohide>
          <Toast.Header>
            <strong className="mr-auto">Login Attempt Failed</strong>
          </Toast.Header>
          <Toast.Body>
            {loginFailedMessage}
          </Toast.Body>
        </Toast>
        
      </main>
    </>
  );
}

// class Login extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       isLoading: false,
//       loginFailed: false,
//       loginFailedMessage: "",
//       username: "",
//       password: ""
//     };
//   }

//   handleChange = event => {
//     this.setState({
//       [event.target.id]: event.target.value
//     });
//   }

//   handleSubmit = async event => {
//     event.preventDefault();
  
//     this.setState({ 
//       isLoading: true
//     });

//     try {
//       // await Auth.signIn(this.state.username, this.state.password);
//       // this.props.userHasAuthenticated(true);
//       // this.props.history.push("/batches");
//       this.loginFailed({message: 'Login failed'});
//     } catch (e) {
//       this.loginFailed(e);
//     }
//   }

//   loginFailed = (e) => {
//     this.setState({ 
//       isLoading: false,
//       loginFailed: true,
//       loginFailedMessage: e.message
//     });
//   }

//   validateForm() {
//     return this.state.username.length > 0 && this.state.password.length > 0;
//   }

//   closeLoginFailedToast = () => {
//     this.setState({ 
//       loginFailed: false,
//       loginFailedMessage: ""
//     });
//   }

//   render() {
//     return (
//       <>
//         <PublicNavbar />
//         <main className="Login">
        
//           <Container>
//             <Row>
//               <Col md={6} className="mx-auto">
//                 <Card>
//                   <Card.Header>
//                     <h4>Admin Login</h4>
//                   </Card.Header>
//                   <Card.Body>
//                     <form onSubmit={this.handleSubmit}>

//                       <FormGroup controlId="username">
//                         <Form.Label>Username</Form.Label>
//                         <FormControl 
//                           data-test="input-username"
//                           type="username" 
//                           value={this.state.username}
//                           onChange={this.handleChange}
//                         />
//                       </FormGroup>
//                       <FormGroup controlId="password">
//                         <Form.Label>Password</Form.Label>
//                         <FormControl 
//                           data-test="input-password"
//                           type="password" 
//                           value={this.state.password}
//                           onChange={this.handleChange}
//                         />
//                       </FormGroup>
//                       <LoginButton
//                         data-test="button-login"
//                         block
//                         size="lg"
//                         disabled={!this.validateForm()}
//                         type="submit"
//                         isLoading={this.state.isLoading}
//                         text="Login"
//                         loadingText="Logging in…"
//                       />
//                     </form>
//                   </Card.Body>
//                 </Card>                
//               </Col>              
//             </Row>
//           </Container>
        
//           <Toast id="loginFailedToast" show={this.state.loginFailed} onClose={this.closeLoginFailedToast} delay={8000} autohide>
//             <Toast.Header>
//               <strong className="mr-auto">Login Attempt Failed</strong>
//             </Toast.Header>
//             <Toast.Body>
//               {this.state.loginFailedMessage}
//             </Toast.Body>
//           </Toast>
          
//         </main>
//       </>
//     )
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    userHasAuthenticated: (authenticated) => dispatch(userHasAuthenticated(authenticated)),    
  };
};

export default connect(null, mapDispatchToProps)(Login);