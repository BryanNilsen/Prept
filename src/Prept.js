import React, { useState } from "react";
import "./Prept.css";
import AppViews from "./components/AppViews";
import Navbar from "./components/navbar/Navbar";

function Prept() {
  const checkisAuthenticated = () =>
    sessionStorage.getItem("credentials") !== null;

  const [isAuthenticated, setIsAuthenticated] = useState(checkisAuthenticated);

  // Check if credentials are in session storage returns true/false

  return (
    <div>
      {isAuthenticated && <Navbar setIsAuthenticated={setIsAuthenticated} />}
      <AppViews
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </div>
  );
}

export default Prept;
