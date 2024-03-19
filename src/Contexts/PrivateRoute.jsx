import React from "react";
// import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
// // import { Component } from "@firebase/component";

// const PrivateRoute = ({ element: Element, ...rest }) => {
//   const { userLoggedIn } = useAuth();

//   return (
//     <Route
//       {...rest}
//       element={userLoggedIn ? <Element /> : <Navigate to="/signin" />}
//     />
//   );
// };

// export default PrivateRoute;

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
