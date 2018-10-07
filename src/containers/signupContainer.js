import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import SignupComponent from "../components/signupComponents";

import { postSignup } from "../actions/signupAction";

function mapStateToProps(state) {
  return {
    signupReducer: state.signup
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      postSignup: postSignup
    }
  )(SignupComponent)
);
