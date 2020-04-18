import React, { useState, useEffect } from "react";
import "./Prept.css";
import AppViews from "./components/AppViews";
import Navbar from "./components/navbar/Navbar";
import Credits from "./components/credits/Credits";

function Prept() {
  
  const checkisAuthenticated = () =>
    sessionStorage.getItem("userId") !== null;
  
  const [isAuthenticated, setIsAuthenticated] = useState(checkisAuthenticated());


  useEffect(() => {
    checkisAuthenticated()
  }, []);

  return (
    <div className="main_container">
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
