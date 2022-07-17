import "./authentication.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context";
import { loginService } from "../../services/authServices";
import { Loader } from "../../Components";

const Login = () => {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const {
    authState: { loading },
    authDispatch,
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const loginHandler = async (e) => {
    e.preventDefault();
    const { email, password } = userDetails;
    if (email && password) {
      const response = await loginService({ email, password }, authDispatch);
      if (response.hasOwnProperty("errorMsg")) {
        setError(response.errorMsg);
      } else {
        setUserDetails({ ...userDetails, email: "", password: "" });
        navigate(location.state?.from?.pathname || "/", { replace: true });
        setError("");
      }
    } else {
      setError("Please enter all details");
    }
  };

  const testCredentialsHandler = () => {
    setUserDetails({
      ...userDetails,
      email: "maitreyee@gmail.com",
      password: "mait1234",
    });
  };

  return (
    <div className="auth-main">
      {loading && <Loader />}
      {!loading && (
        <div className="auth-container">
          <h3 className="txt-center txt-lg form-heading">Login</h3>
          <form className="txt-form">
            <label htmlFor="email" className="txt-md form-label">
              Email
            </label>
            <input
              className="txt-input txt-sm padding-sm"
              type="email"
              placeholder="Enter your email"
              id="email"
              value={userDetails.email}
              required
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
            />
            <label htmlFor="password" className="txt-md form-label">
              Password
            </label>
            <span className="txt-input padding-sm">
              <input
                className="password-input txt-sm"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                id="password"
                value={userDetails.password}
                onInput={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
                required
              />
              <span
                className="password-icon"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <i className="fa fa-eye"></i>
                ) : (
                  <i className="fa fa-eye-slash"></i>
                )}
              </span>
            </span>
            <label className="txt-md padding-sm form-label">
              <input
                className="txt-input padding-sm"
                type="checkbox"
                name="remember"
              />
              Remember Me?
            </label>
            <span className="txt-md form-link" onClick={testCredentialsHandler}>
              Use Test Login
            </span>
            {error && <p className="error-msg">{error}</p>}
            <button className="form-btn padding-sm" onClick={loginHandler}>
              Login
            </button>
            <Link to="/signup" className="padding-sm">
              <span className="txt-md txt-bold form-link">
                Create a new account
              </span>
            </Link>
          </form>
        </div>
      )}
    </div>
  );
};

export { Login };
