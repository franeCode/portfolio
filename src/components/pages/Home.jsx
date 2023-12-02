import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomCursor from "../CustomCursor";
import About from "./About";
import HomeInfo from "../HomeInfo";
import AboutView from "../AboutView";
import ProjectView from "../ProjectView";


function Home() {
    const [showContent, setShowContent] = useState(false)

    const changeContent = () => {
        setShowContent(true);
      };

  return (
    <>
      <div className="main-container">
        <div className="flex-container w-full">
          {/* first row */}
          <HomeInfo />

          {/* second row */}
          <div className="big-container">
            <div className="content-wrapper">
            {showContent ? (
                <ProjectView />
              ) : (
              <AboutView changeContent={changeContent}
                    showContent={showContent}
                    setShowContent={setShowContent}
             />
              )}
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
