import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function PrivateRoute() {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  return user ? (<Outlet />) : (<Navigate to="/login" state={{ from: location.pathname }} replace />);
}