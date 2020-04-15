import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./login/Login";
import Water from "./water/Water";

const AppViews = () => {
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
        path="/login"
        render={props => {
          return <Login />;
        }}
      />
    </React.Fragment>
  );
};

export default AppViews;
