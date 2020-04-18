import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Household from "./household/Household";
import HouseholdAddForm from "./household/HouseholdAddForm";
import HouseholdEditForm from "./household/HouseholdEditForm";
import Login from "./login/Login";
import Water from "./water/Water";
import Welcome from "./welcome/Welcome";
import Food from "./food/Food";

const AppViews = (props) => {
  const setIsAuthenticated = props.setIsAuthenticated;
  const isAuthenticated = props.isAuthenticated;

  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={(props) =>
          !isAuthenticated ? props.history.replace("/login") : <Home />
        }
      />
      <Route
        exact
        path="/water"
        render={(props) =>
          !isAuthenticated ? props.history.replace("/login") : <Water />
        }
      />
      <Route
        exact
        path="/food"
        render={(props) =>
          !isAuthenticated ? props.history.replace("/login") : <Food />
        }
      />
      <Route
        exact
        path="/welcome"
        render={(props) =>
          !isAuthenticated ? props.history.replace("/login") : <Welcome />
        }
      />
      <Route
        exact
        path="/household"
        render={(props) =>
          !isAuthenticated ? (
            props.history.replace("/login")
          ) : (
            <Household {...props} />
          )
        }
      />
      <Route
        exact
        path="/household/new"
        render={(props) =>
          !isAuthenticated ? (
            props.history.replace("/login")
          ) : (
            <HouseholdAddForm {...props} />
          )
        }
      />
      <Route
        exact
        path="/household/edit/:memberId(\d+)"
        render={(props) =>
          !isAuthenticated ? (
            props.history.replace("/login")
          ) : (
            <HouseholdEditForm {...props} />
          )
        }
      />
      <Route
        path="/login"
        render={(props) => {
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
