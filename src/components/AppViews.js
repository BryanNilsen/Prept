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
  const user = props.user;
  const getUserData = props.getUserData;

  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={(props) =>
          !isAuthenticated ? (
            props.history.replace("/login")
          ) : (
            <Home user={user} />
          )
        }
      />
      <Route
        exact
        path="/water"
        render={(props) =>
          !isAuthenticated ? (
            props.history.replace("/login")
          ) : (
            <Water user={user} />
          )
        }
      />
      <Route
        exact
        path="/food"
        render={(props) =>
          !isAuthenticated ? (
            props.history.replace("/login")
          ) : (
            <Food user={user} />
          )
        }
      />
      <Route
        exact
        path="/welcome"
        render={(props) =>
          !isAuthenticated ? (
            props.history.replace("/login")
          ) : (
            <Welcome user={user} />
          )
        }
      />
      <Route
        exact
        path="/household"
        render={(props) =>
          !isAuthenticated ? (
            props.history.replace("/login")
          ) : (
            <Household user={user} getUserData={getUserData} {...props} />
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
