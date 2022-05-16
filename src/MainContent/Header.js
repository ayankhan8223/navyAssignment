import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="left">
          <img src="\shipVector.png" alt="" />
          <div className="title">
            <h3>Demo Vessel</h3>
            <p>16 Crewmates - 09 Active</p>
          </div>
        </div>
        <div className="right">
          <p>GMT +09:00</p>
          <img src="\poweroff.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
