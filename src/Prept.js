import React, { useState, useEffect } from "react";
import "./Prept.css";
import AppViews from "./components/AppViews";
import Navbar from "./components/navbar/Navbar";
import Credits from "./components/credits/Credits";

function Prept() {
  const checkisAuthenticated = () => sessionStorage.getItem("userId") !== null;

  const [isAuthenticated, setIsAuthenticated] = useState(
    checkisAuthenticated()
  );

  useEffect(() => {
    checkisAuthenticated();
  }, []);

  return (
    <>
      <div className="maingrid">
        <div></div>
        <div className="grid_nav">
          {isAuthenticated && (
            <Navbar setIsAuthenticated={setIsAuthenticated} />
          )}
        </div>
        <div></div>
        <div></div>

        <div className="main_container">
          <AppViews
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
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
