import React from "react";
import "./Selection.css";
function Selection({
  notRoutine,
  routineDescription,
  alertRoutine,
  Routine,
  routineDescriptionAlert,
}) {
  return (
    <div>
      <div className="selectionContainer">
        <div className="moreIcon">
          <img src="\more-horizontal.png" alt="" />
        </div>
        <div className="routine">
          <input type="checkbox" name="switch" class="check" />
          <div className="routineDescription">
            {notRoutine ? (
              <h5>
                <strike>{notRoutine}</strike>
              </h5>
            ) : alertRoutine ? (
              <h5 className="alertRoutine">{alertRoutine}</h5>
            ) : (
              <h5>{Routine}</h5>
            )}

            <p>
              {routineDescription}{" "}
              <span className={`${routineDescriptionAlert ? "alert" : ""}`}>
                {routineDescriptionAlert}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Selection;
