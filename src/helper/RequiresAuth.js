import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../context";

const RequiresAuth = ({ children }) => {
  const location = useLocation();
  const {
    authState: { encodedToken, userName },
  } = useAuth();
  return encodedToken && userName ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { RequiresAuth };
