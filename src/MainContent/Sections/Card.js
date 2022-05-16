import React from "react";
import "./Card.css";

function Card({ paragraph, designation, time }) {
  return (
    <div>
      <div className="card">
        <div className="cardInner">
          <p>
            <span>{designation}</span>
            {paragraph}
          </p>
          <div className="time">
            <p>{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
