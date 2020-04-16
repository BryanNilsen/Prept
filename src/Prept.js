import React, { useState, useEffect } from "react";
import "./Prept.css";
import APIManager from "./modules/APIManager"
import AppViews from "./components/AppViews";
import Navbar from "./components/navbar/Navbar";
import Credits from "./components/credits/Credits";

function Prept() {
  const checkisAuthenticated = () =>
    sessionStorage.getItem("credentials") !== null;

  const [isAuthenticated, setIsAuthenticated] = useState(checkisAuthenticated);


  // const getUsers = () => {
  //   return APIManager.getUsers().then(usersFromAPI => {
  //     console.log(usersFromAPI);
  //   });
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  return (
    <div>
      {isAuthenticated && <Navbar setIsAuthenticated={setIsAuthenticated} />}
      <AppViews
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        />
        {isAuthenticated && <Credits setIsAuthenticated={setIsAuthenticated} />}
    </div>
  );
}

export default Prept;
