import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Household from "./household/Household";
import HouseholdAddForm from "./household/HouseholdAddForm";
import HouseholdEditForm from "./household/HouseholdEditForm";
import Login from "./login/Login";
import Water from "./water/Water";
import WaterAddForm from "./water/WaterAddForm";
import WaterEditForm from "./water/WaterEditForm";
import Welcome from "./welcome/Welcome";
import Food from "./food/Food";
import FoodAddEdit from "./food/FoodAddEdit";

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
            <Water user={user} getUserData={getUserData} {...props} />
          )
        }
      />
      <Route
        exact
        path="/water/new"
        render={(props) =>
          !isAuthenticated ? (
            props.history.replace("/login")
          ) : (
            <WaterAddForm user={user} getUserData={getUserData} {...props} />
          )
        }
      />
      <Route
        exact
        path="/water/edit/:waterId(\d+)"
        render={(props) =>
          !isAuthenticated ? (
            props.history.replace("/login")
          ) : (
            <WaterEditForm user={user} getUserData={getUserData} {...props} />
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
            <Food user={user} getUserData={getUserData} {...props} />
          )
        }
      />
      <Route
        exact
        path="/food/edit/:foodId(\d+)"
        render={(props) =>
          !isAuthenticated ? (
            props.history.replace("/login")
          ) : (
            <FoodAddEdit
              user={user}
              getUserData={getUserData}
              {...props}
              isEdit={true}
            />
          )
        }
      />
      <Route
        exact
        path="/food/new"
        render={(props) =>
          !isAuthenticated ? (
            props.history.replace("/login")
          ) : (
            <FoodAddEdit
              user={user}
              getUserData={getUserData}
              {...props}
              isEdit={false}
            />
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
            <HouseholdAddForm
              user={user}
              getUserData={getUserData}
              {...props}
            />
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
            <HouseholdEditForm
              user={user}
              getUserData={getUserData}
              {...props}
            />
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
