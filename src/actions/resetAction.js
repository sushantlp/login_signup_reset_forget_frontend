import api from "../utils/api";

export const actionType = {
  reset: "RESET"
};

export function postReset(hash, password) {
  return dispatch => {
    api
      .postResetApi(hash, password)
      .then(reset => dispatch({ type: actionType.reset, reset }));
  };
}
