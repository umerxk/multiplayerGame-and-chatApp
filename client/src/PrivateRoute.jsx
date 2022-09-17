import { Outlet, Navigate } from "react-router-dom";
const PrivateUserRoute = () => {
  const isPermitted = localStorage.getItem("userId");
  return <>{isPermitted ? <Outlet /> : <Navigate to={"/login"} />}</>;
};
export default PrivateUserRoute;
