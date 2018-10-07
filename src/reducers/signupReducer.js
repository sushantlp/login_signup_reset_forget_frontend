import { actionType } from "../actions/signupAction";

const initialState = {
  signup: {},
  msg: "",
  status: "START"
};

export function signup(state = initialState, action) {
  switch (action.type) {
    case actionType.signup:
      if (action.signup.bool) {
        return {
          ...state,
          signup: action.signup,
          status: "SUCCESS",
          msg: "Successful register please login"
        };
      } else {
        return {
          ...state,
          signup: action.signup,
          status: "FAIL",
          msg: action.signup.results
        };
      }

    default:
      return state;
  }
}
