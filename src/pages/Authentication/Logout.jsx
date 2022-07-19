import "./authentication.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import { LOGOUT, AUTHLOADING } from "../../helper/constants";
import { Loader } from "../../Components";

const Logout = () => {
  const navigate = useNavigate();
  const {
    authState: { loading },
    authDispatch,
  } = useAuth();

  const logoutHandler = () => {
    authDispatch({ type: AUTHLOADING });
    setTimeout(() => {
      authDispatch({ type: LOGOUT });
      navigate("/");
    }, 1000);
  };
  const clickHandler = () => {
    navigate("/");
  };

  return (
    <div className="auth-main">
      {loading && <Loader />}
      {!loading && (
        <div className="auth-container">
          <h3 className="txt-center txt-md form-heading">Logout</h3>
          <p className="txt-center  padding-lg txt-md">
            Are you sure you want to leave?
          </p>
          <div className="txt-center">
            <button className="btn btn-first txt-sm" onClick={logoutHandler}>
              Yes
            </button>
            <button className="btn btn-second txt-sm" onClick={clickHandler}>
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export { Logout };
