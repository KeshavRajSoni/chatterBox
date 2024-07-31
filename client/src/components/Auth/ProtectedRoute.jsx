import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

function ProtectedRoute({ children, User, navigate = "/login" }) {
  if (!User) return <Navigate to={navigate} />;
  return <div>{children ? children : <Outlet />}</div>;
}

ProtectedRoute.propTypes = {
  User: PropTypes.bool.isRequired,
  navigate: PropTypes.string,
  children: PropTypes.element,
};

export default ProtectedRoute;
//even after using the proptype in the code i am geting error "'User' is missing in props validationeslint".
//please check the code once.
