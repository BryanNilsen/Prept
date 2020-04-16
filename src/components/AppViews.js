import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./login/Login";
import Water from "./water/Water";

const AppViews = props => {
  const setIsAuthenticated = props.setIsAuthenticated;
  const isAuthenticated = props.isAuthenticated;

  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route
        exact
        path="/water"
        render={props => {
          return <Water />;
        }}
      />
      <Route
        path="/login"
        render={props => {
          return (
            <Login
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              {...props}
            />
          );
        }}
      />
    </React.Fragment>
  );
};

export default AppViews;
