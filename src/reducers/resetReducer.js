import { actionType } from "../actions/resetAction";

const initialState = {
  reset: {},
  msg: "",
  status: "START"
};

export function reset(state = initialState, action) {
  switch (action.type) {
    case actionType.reset:
      if (action.reset.bool) {
        return {
          ...state,
          reset: action.reset,
          status: "SUCCESS",
          msg: action.reset.results
        };
      } else {
        return {
          ...state,
          reset: action.reset,
          status: "FAIL",
          msg: action.reset.results
        };
      }

    default:
      return state;
  }
}
