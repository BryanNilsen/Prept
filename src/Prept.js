import React, { useState, useEffect } from "react";
import "./Prept.css";
import APIManager from "./modules/APIManager";
import AppViews from "./components/AppViews";
import Navbar from "./components/navbar/Navbar";
import Credits from "./components/credits/Credits";

function Prept() {
  const checkisAuthenticated = () => sessionStorage.getItem("userId") !== null;

  const [isAuthenticated, setIsAuthenticated] = useState(
    checkisAuthenticated()
  );

  const [user, setUser] = useState({
    id: "",
    username: "",
    householdMembers: [],
    foods: [],
    waters: [],
    supplies: [],
  });

  const getUserData = () => {
    const userId = sessionStorage.getItem("userId");
    if (!userId) {
      return;
    }
    return APIManager.getUserWithAllData(userId).then((user) => {
      setUser(user);
      return user;
    });
  };

  const clearUserData = () => {
    setUser({
      id: "",
      username: "",
      householdMembers: [],
      foods: [],
      waters: [],
      supplies: [],
    });
  };

  useEffect(() => {
    checkisAuthenticated();
  }, []);

  useEffect(() => {
    getUserData();
  }, [isAuthenticated]);

  return (
    <>
      <div className="maingrid">
        <div></div>
        <div className="grid_nav">
          {isAuthenticated && (
            <Navbar
              setIsAuthenticated={setIsAuthenticated}
              clearUserData={clearUserData}
            />
          )}
        </div>
        <div></div>
        <div></div>

        <div className="main_container">
          <AppViews
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
            getUserData={getUserData}
            user={user}
          />
        </div>

        <div></div>
        <div></div>
        <div className="grid_footer">
          {isAuthenticated && (
            <Credits setIsAuthenticated={setIsAuthenticated} />
          )}
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Prept;
