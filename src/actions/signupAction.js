import api from "../utils/api";

export const actionType = {
  signup: "SIGN_UP"
};

export function postSignup(name, email, password) {
  return dispatch => {
    api
      .postSignupApi(name, email, password)
      .then(signup => dispatch({ type: actionType.signup, signup }));
  };
}
