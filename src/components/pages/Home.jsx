// Home.jsx

import React, { useState } from "react";
import HomeInfo from "../HomeInfo";
import AboutView from "../AboutView";
import ProjectView from "../ProjectView";
import Footer from "../Footer";

function Home() {
  const [showAbout, setShowAbout] = useState(true);
  const [showProjects, setShowProjects] = useState(false);

  const changeAbout = () => {
    setShowAbout(true);
    setShowProjects(false)
  };

  const changeProjects = () => {
    setShowProjects(true)
    setShowAbout(false)
  }
  
  return (
    <>
      <div className="main-container">
        <div className="flex-container w-full">
          {/* first row */}
          <HomeInfo changeAbout={changeAbout} changeProjects={changeProjects} />

          {/* second row */}
          <div className="big-container">
          <div
          className={`transition-opacity duration-500 ${showAbout ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
          {showAbout && <AboutView />}
        </div>
        <div
          className={`transition-opacity duration-500 ${showProjects ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
          {showProjects && <ProjectView />}
        </div>
        </div>
        <Footer />
        </div>
        
      </div>
    </>
  );
}

export default Home;
