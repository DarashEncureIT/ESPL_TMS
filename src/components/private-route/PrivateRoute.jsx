import React from "react";
import { Navigate, Route, redirect } from "react-router-dom";
import { DefaultLayout } from "../../layout/DefaultLayout";
const isAuth = true;
export const PrivateRoute = ({ children,...rest }) => {
    
  return isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Navigate to='/login'/>;
};
