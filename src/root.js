import React from "react";
import PropTypes from "prop-types";

import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./root.css";

// Router root
const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/web" component={Background} />
          <Route exact path="/web/terms" component={Terms} />
          <Route exact path="/web/privacy" component={Privacy} />
          <Route exact path="/web/faq" component={Faq} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
