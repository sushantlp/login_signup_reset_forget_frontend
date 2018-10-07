import { actionType } from "../actions/forgetAction";

const initialState = {
  forget: {},
  msg: "",
  status: "START"
};

export function forget(state = initialState, action) {
  switch (action.type) {
    case actionType.forget:
      if (action.forget.bool) {
        return {
          ...state,
          forget: action.forget,
          status: "SUCCESS",
          msg: action.forget.results
        };
      } else {
        return {
          ...state,
          forget: action.forget,
          status: "FAIL",
          msg: action.forget.results
        };
      }

    default:
      return state;
  }
}
