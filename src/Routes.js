import React from "react";
import { Route, Switch } from "react-router";
import { connect } from 'react-redux';

import NotFound from "./containers/NotFound";
import Login from "./components/Login";
import Home from "./components/Home";


const Routes = (props) =>
  <Switch>            
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />

    <Route component={NotFound} />
  </Switch>;

const mapStateToProps = state => {
  return {
    isAuthenticated: state.appReducer.isAuthenticated,
  };
};

export default connect(mapStateToProps)(Routes);
