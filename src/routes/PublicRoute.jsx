import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const redirectTo = location.state?.from || "/profile";

  return user ? <Navigate to={redirectTo} replace /> : <Outlet />;
}