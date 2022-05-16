import React from "react";
import "./Section1.css";

function Section1() {
  return (
    <div>
      <div className="section1">
        <div className="content1">
          <div className="iconContainer">
            <img src="\Card\no-touch 1.png" alt="" />
            <img src="\Card\Merchant-Navy-Org-Chart-1024x707 1.png" alt="" />
          </div>
          <div className="details">
            <p>Third Officer</p>
            <h2>Niranjan Pawar</h2>
            <p>Crew ID 86556</p>
          </div>
          <div className="content1footer">
            <h5>My Last Activity</h5>
            <p>
              Submitted the Deck Log for <span> 1200-1600 Watch</span> at 08:16
              UTC
            </p>
          </div>
        </div>

        <div className="content2">
          <div className="iconContainer">
            <img src="\Card\cargo-ship (3) 1.png" alt="" />
            <h2>SGSIN - NOOSL</h2>
          </div>
          <div className="cargoDescription">
            <p>Statement of Facts </p>
            <p>Current Status</p>
            <h5>Cargo First Lift</h5>
          </div>
          <div className="cargoDetails">
            <div className="detail">
              <p>Next Port Call</p>
              <p>INVTZ1</p>
            </div>
            <div className="detail">
              <p>ETA</p>
              <p>Nov 27, 1450 UTC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
