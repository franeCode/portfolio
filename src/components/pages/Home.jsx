import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomCursor from "../CustomCursor";
import About from "./About";
import HomeInfo from "../HomeInfo";
import AboutView from "../AboutView";
import ProjectView from "../ProjectView";
import Footer from "../Footer";


function Home() {
    const [showContent, setShowContent] = useState(true)

    const changeContent = () => {
        setShowContent(!showContent);
      };

  return (
    <>
      <div className="main-container">
        <div className="flex-container w-full">
          {/* first row */}
          <HomeInfo changeContent={changeContent}/>

          {/* second row */}
          <div className="big-container">
            <div className="content-wrapper">
            {/* <div className={`big-container content-wrapper ${showContent ? "transition-opacity opacity-100 duration-150 ease-in-out" : "transition-opacity opacity-0"}`}> */}
            {showContent ? (
                <AboutView changeContent={changeContent}/>
              ) : (
              <ProjectView changeContent={changeContent} />
              )}
              {/* </div> */}
          </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
