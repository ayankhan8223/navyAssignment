import React from "react";
import "./Sidebar.css";
import Items from "./Items";

function Sidebar() {
  return (
    <div className="Container">
      <Items image="\home.png" title="Home" active />
      <Items image="\layout (2).png" title="Workspace" />
      <Items image="\Vector (1).png" title="MARPOL" />
      <Items image="\Heart.png" title="OHS" />
      <Items image="\pie-chart (2) 1.png" title="Insights" />
      <Items image="\time-and-date (1) 1.png" title="History" />
      <Items image="\Vector (2).png" title="Apps" />
      <Items image="\settings.png" title="Settings" />
    </div>
  );
}

export default Sidebar;
