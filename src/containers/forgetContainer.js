import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ForgetComponent from "../components/forgetComponents";

import { postForget } from "../actions/forgetAction";

function mapStateToProps(state) {
  return {
    forgetReducer: state.forget
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      postForget: postForget
    }
  )(ForgetComponent)
);
