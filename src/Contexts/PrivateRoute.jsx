import React from "react";
import { useAuth } from "./AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { userLoggedIn } = useAuth();

  if (!userLoggedIn) {
    // Redirect to login if not logged in
    return <Navigate to="/signin" replace />;
  }

  // Render children (the actual page) if logged in
  return children || <Outlet />;
};

export default PrivateRoute;
