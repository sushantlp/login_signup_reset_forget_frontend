import { actionType } from "../actions/loginAction";

const initialState = {
  login: {},
  msg: "",
  status: "START"
};

export function login(state = initialState, action) {
  switch (action.type) {
    case actionType.login:
      if (action.login.bool) {
        return {
          ...state,
          login: action.login,
          status: "SUCCESS",
          msg: action.login.results
        };
      } else {
        return {
          ...state,
          login: action.login,
          status: "FAIL",
          msg: action.login.results
        };
      }

    default:
      return state;
  }
}
