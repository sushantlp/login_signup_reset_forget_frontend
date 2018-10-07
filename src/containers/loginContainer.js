import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import LoginComponent from "../components/loginComponents";

import { postLogin } from "../actions/loginAction";

function mapStateToProps(state) {
  return {
    loginReducer: state.login
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      postLogin: postLogin
    }
  )(LoginComponent)
);
