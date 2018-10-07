import api from "../utils/api";

export const actionType = {
  forget: "FORGET"
};

export function postForget(email) {
  return dispatch => {
    api
      .postForgetApi(email)
      .then(forget => dispatch({ type: actionType.forget, forget }));
  };
}
