import React from "react";
import "./Section2.css";
import Card from "./Card";

function Section2() {
  return (
    <div>
      <div className="section2">
        <div className="titleContainer">
          <h5>Ahoy Stream</h5>
          <img src="\Card\Group.png" alt="" />
        </div>
        <p>Last updated - 4 minutes ago</p>
        <div className="container">
          <div className="cardssContainer">
            <div className="cardss">
              <div className="cardssTitle">
                <p>Important Notice</p>
                <img src="\Card\Lists\Cells\paperclip.png" alt="" />
              </div>
              <p>Captain’s Bridge Order dated Nov 27, 2020</p>
              <div className="actionContainer">
                <div>
                  <img src="\Card\eye.png" alt="" />
                  <p>1</p>
                </div>
                <button>READ</button>
              </div>
            </div>
          </div>
          <Card
            designation="Second Officer Oliver"
            paragraph="submitted the Deck Log for 1400-1500 watch hour and completed the Handover Checklist"
            time="UTC 1105 | LT +06:30"
          />
          <Card
            designation="Third Engineer"
            paragraph="Edward submitted the Engine Log for 1200-1600 watch
          hour and completed the Handover Checklist"
            time="UTC 1105 | LT +06:30"
          />
          <Card
            designation="Second Officer Oliver"
            paragraph={`submitted the Deck Log for 1400-1500 watch hour and completed the Handover Checklist`}
            time="UTC 1105 | LT +06:30"
          />
          <Card
            designation="Second Officer Oliver"
            paragraph={`submitted the Deck Log for 1400-1500 watch hour and completed the Handover Checklist`}
            time="UTC 1105 | LT +06:30"
          />
        </div>
      </div>
    </div>
  );
}

export default Section2;
