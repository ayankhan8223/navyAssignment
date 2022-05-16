import React from "react";
import "./Section3.css";
import Selection from "./Selection";

function Section3() {
  return (
    <div>
      <div className="section3">
        <div className="titleContainer">
          <h6>My Day</h6>
          <img src="\cloudy 1.png" alt="" />
        </div>
        <p>Tuesday, March 2</p>
        <div className="container2">
          <Selection
            notRoutine="Deck Log | 1200 - 1600 Watch"
            routineDescription="Assigned by Wayship"
          />
          <Selection
            alertRoutine="COVID19 Health Guidelines"
            routineDescription="Assigned by Technical | Due in 2 days"
          />
          <Selection
            Routine="Steering Check"
            routineDescription="Assigned by Captain | "
            routineDescriptionAlert=" Due in 2 hours"
          />
          <Selection
            Routine="Review Noon Report"
            routineDescription="Assigned by Self | Due in 8 hours"
          />
          <Selection
            Routine="ECDIS Check"
            routineDescription="Assigned by Chief Officer | Due in 6 hours"
          />
        </div>
        <div className="inputContainer">
          <img src="\plus 1.png" alt="" />
          <input type="text" placeholder="Add a to-do reminder" />
        </div>
      </div>
    </div>
  );
}

export default Section3;
