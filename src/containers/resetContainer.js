import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ResetComponent from "../components/resetComponents";

import { postReset } from "../actions/resetAction";

function mapStateToProps(state) {
  return {
    resetReducer: state.reset
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      postReset: postReset
    }
  )(ResetComponent)
);
