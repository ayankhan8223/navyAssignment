import React from "react";
import Header from "./Header";
import Section1 from "./Sections/Section1/Section1";
import Section2 from "./Sections/Section2/Section2";
import Section3 from "./Sections/Section3/Section3";
import "./MainContent.css";

function MainContent() {
  return (
    <>
      {/* divied main body into two header and three sections */}
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
