import "./authentication.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { signupService } from "../../services/authServices";
import { useAuth } from "../../context/userContext";
import { Loader } from "../../Components";

const Signup = () => {
  const {
    authState: { loading },
    authDispatch,
  } = useAuth();
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    phNumber: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const signupHandler = async (e) => {
    e.preventDefault();
    const { fullName, phNumber, email, password } = userDetails;
    if (fullName && phNumber && email && password) {
      const response = await signupService(
        { fullName, phNumber, email, password },
        authDispatch
      );
      if (response.hasOwnProperty("errorMsg")) {
        setErrorMsg(response.setErrorMsg);
      } else {
        setUserDetails({
          ...userDetails,
          fullName: "",
          phNumber: "",
          email: "",
          password: "",
        });
        navigate(location.state?.from?.pathname || "/", { replace: true });
        setErrorMsg("");
      }
    } else {
      setErrorMsg("Enter all the details");
    }
  };

  return (
    <div className="auth-main">
      {loading && <Loader />}
      {!loading && (
        <div className="auth-container">
          <h3 className="txt-center txt-lg form-heading">Signup</h3>
          <form className="txt-form">
            <label htmlFor="name" className="txt-md form-label">
              Name
            </label>
            <input
              className="txt-input txt-sm padding-sm"
              type="text"
              placeholder="Enter your name"
              id="name"
              required
              value={userDetails.fullName}
              onChange={(e) =>
                setUserDetails({ ...userDetails, fullName: e.target.value })
              }
            />
            <label htmlFor="contact" className="txt-md form-label">
              Mobile number
            </label>
            <input
              className="txt-input txt-sm padding-sm"
              type="tel"
              maxLength="10"
              placeholder="Enter your mobile number"
              id="contact"
              required
              value={userDetails.phNumber}
              onChange={(e) =>
                setUserDetails({ ...userDetails, phNumber: e.target.value })
              }
            />
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
            {errorMsg && <p className="error-msg">{errorMsg}</p>}
            <button
              className="form-btn padding-sm"
              onClick={(e) => signupHandler(e)}
            >
              Signup
            </button>
            <p className="txt-md form-label">
              Already have an account?{" "}
              <Link to="/login">
                <span className="form-link">Login</span>
              </Link>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export { Signup };
