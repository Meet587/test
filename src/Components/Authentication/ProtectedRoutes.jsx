import React from "react";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = ({ isPublic, isAuthorized }) => {
  return (isPublic || isAuthorized) ? <Outlet /> :<Navigate to='/login' />
};

export default ProtectedRoutes;
