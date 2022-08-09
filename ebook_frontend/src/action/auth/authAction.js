import { authType } from "./authType";
import axios from "../../helper/axios";

export const signinAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: authType.LOGIN_REQUEST });
      const res = await axios.post("/api/auths/user/signin", {
        email: "test@test.com",
        password: "123456789",
      });
      if (res.status === 200) {
        console.log(res);
      }
    } catch (err) {
      console.log(err.response);
    }
  };
};
