import React from "react";
import PropTypes from "prop-types";

import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./root.css";

import Signup from "./containers/signupContainer";
import Login from "./containers/loginContainer";
import Forget from "./containers/forgetContainer";
import Reset from "./containers/resetContainer";

// Router root
const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forget" component={Forget} />
          <Route exact path="/reset" component={Reset} />

          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
