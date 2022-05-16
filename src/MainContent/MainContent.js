import React from "react";
import Header from "./Header";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import "./MainContent.css";

function MainContent() {
  return (
    <>
      <div className="mainContentContainer">
        <Header />
        <div className="ThreeSections">
          <Section1 />
          <Section2 />
          <Section3 />
        </div>
      </div>
    </>
  );
}

export default MainContent;
