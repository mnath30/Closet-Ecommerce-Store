import {
  AUTHLOADING,
  LOGIN,
  SIGNUP,
  LOGOUT,
  AUTHERROR,
} from "../helper/constants";

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTHLOADING:
      return { ...state, loading: true };
    case LOGIN:
      localStorage.setItem("encodedToken", action.payload.encodedToken);
      localStorage.setItem("username", action.payload.foundUser.fullName);
      return {
        ...state,
        encodedToken: action.payload.encodedToken,
        userName: action.payload.foundUser.fullName,
        email: action.payload.foundUser.email,
        loading: false,
        error: "",
      };
    case SIGNUP:
      localStorage.setItem("encodedToken", action.payload.encodedToken);
      localStorage.setItem("username", action.payload.createdUser.fullName);
      return {
        ...state,
        encodedToken: action.payload.encodedToken,
        userName: action.payload.createdUser.fullName,
        email: action.payload.createdUser.email,
        loading: false,
        error: "",
      };
    case LOGOUT:
      localStorage.removeItem("encodedToken");
      localStorage.removeItem("username");
      return {
        ...state,
        encodedToken: "",
        userName: "",
        email: "",
        loading: false,
        error: "",
      };
    case AUTHERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { authReducer };
