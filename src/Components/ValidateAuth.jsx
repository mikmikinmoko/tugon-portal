import { Navigate, Outlet, useLocation } from "react-router-dom";

const ValidateAuth = (isAuth) => {
  const location = useLocation();

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default ValidateAuth;
