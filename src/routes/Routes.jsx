// @flow
import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import decode from 'jwt-decode';
import {
  Home, Register, Login, CreateTeam, ViewTeam,
} from '../screens';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');
  try {
    decode(token);
    decode(refreshToken);
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
};

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      ))
      }
    />
  );
}

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Route path="/view-team" exact component={ViewTeam} />
      <PrivateRoute path="/create-team" exact component={CreateTeam} />
    </Switch>
  </Router>
);

export default Routes;

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};
