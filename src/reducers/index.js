import { combineReducers } from "redux";

import { signup } from "./signupReducer";
import { login } from "./loginReducer";
import { forget } from "./forgetReducer";
import { reset } from "./resetReducer";

export default combineReducers({
  signup,
  login,
  forget,
  reset
});
