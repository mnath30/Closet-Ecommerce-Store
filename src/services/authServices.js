import axios from "axios";
import { AUTHLOADING, LOGIN, SIGNUP, AUTHERROR } from "../helper/constants";

const loginService = async ({ email, password }, dispatch) => {
  try {
    dispatch({ type: AUTHLOADING });
    const response = await axios.post("/api/auth/login", {
      email,
      password,
    });
    if (response.status === 200) {
      dispatch({ type: LOGIN, payload: response.data });
      return { username: response.data?.foundUser?.fullName };
    } else {
      dispatch({
        type: AUTHERROR,
        payload: "There was some error in processing your request",
      });
      return { errorMsg: "There was some error in processing your request" };
    }
  } catch (error) {
    dispatch({
      type: AUTHERROR,
      payload: "There was some error in processing your request",
    });
    return { errorMsg: "There was some error in processing your request" };
  }
};

const signupService = async (
  { fullName, phNumber, email, password },
  dispatch
) => {
  try {
    dispatch({ type: AUTHLOADING });
    const response = await axios.post("/api/auth/signup", {
      email,
      password,
      fullName,
      phNumber,
    });
    if (response.status === 201) {
      dispatch({ type: SIGNUP, payload: response.data });
      return { username: response.data?.createdUser?.fullName };
    } else {
      dispatch({
        type: AUTHERROR,
        payload: "There was some error in processing your request",
      });
      return { errorMsg: "There was some error in processing your request" };
    }
  } catch (error) {
    dispatch({
      type: AUTHERROR,
      payload: "There was some error in processing your request",
    });
    return { errorMsg: "There was some error in processing your request" };
  }
};

export { loginService, signupService };
