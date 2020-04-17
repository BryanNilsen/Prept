import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./login/Login";
import Water from "./water/Water";
import Welcome from "./welcome/Welcome";
import Food from "./food/Food";

const AppViews = props => {
  const setIsAuthenticated = props.setIsAuthenticated;
  const isAuthenticated = props.isAuthenticated;

  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => 
          !isAuthenticated ? (props.history.replace("/login")) :  <Home />
        }
      />
      <Route
        exact
        path="/water"
        render={props =>
          !isAuthenticated ? (props.history.replace("/login")) :  <Water />
        }
      />
      <Route
        exact
        path="/food"
        render={props => 
          !isAuthenticated ? (props.history.replace("/login")) :  <Food />
        }
      />
      <Route
        exact
        path="/welcome"
        render={props => 
          !isAuthenticated ? (props.history.replace("/login")) :  <Welcome />
        }
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
