import React from "react";

import HomeInfo from "../HomeInfo";
import AboutView from "../AboutView";
// import { FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <>
      <div className="main-container">
        <div className="flex-container w-full">
          <HomeInfo />
          <div className="big-container">
            <div className="content-wrapper">
              <AboutView />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
