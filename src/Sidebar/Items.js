import React from "react";
import "./Items.css";

function Items({ image, title, active }) {
  return (
    <div>
      <div className={`item ${active ? "active" : ""}`}>
        <img src={image} alt="" />
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Items;
