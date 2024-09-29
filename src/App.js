import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";
function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a >
         Current Weather Update
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" >
          ABHIJIT RANJAN &copy; SRMIST 2024
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" >
          Open Weather 
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;