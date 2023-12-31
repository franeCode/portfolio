import React, { useState } from "react";
import logo from "../assets/logo-vector.png";
import html from "../assets/icons8-html-5.svg";
import css from "../assets/icons8-css.svg";
import javascript from "../assets/icons8-javascript.svg";
import react from "../assets/icons8-react.svg";
import python from "../assets/icons8-python.svg";
import cv from "../../CV_A.Popovic.pdf";

function HomeInfo({ changeAbout, changeProjects }) {
  const [activeButton, setActiveButton] = useState("about");

  const handleAbout = (content) => {
    changeAbout(content);
    setActiveButton("about");
  };

  const handleProjects = (content) => {
    changeProjects(content);
    setActiveButton("projects");
  };

  return (
    <>
      <div className="small-wrapper">
        <div className="w-full lg:w-1/4 fixed top-0 lg:top-20 bg-main pt-6 lg:pt-0 lg:px-6 xl:px-0 z-20">
          <img src={logo} alt="logo-img" />
          <div className="">
            <div className="tech">
              <img src={html} alt="HTML"></img>
              <img src={css} alt="CSS"></img>
              <img src={javascript} alt="JavaScript"></img>
              <img src={react} alt="React"></img>
              <img src={python} alt="Python"></img>
            </div>
          </div>

          <div className="links">
            <button
              onClick={() => handleAbout("about")}
              className={`p-2 transition duration-300 ease-in-out ${
                activeButton === "about" ? " text-white" : ""
              }`}
            >
              <p className="btn-link">__ ABOUT</p>
            </button>

            <button
              onClick={() => handleProjects("projects")}
              className={`p-2 transition duration-300 ease-in-out ${
                activeButton === "projects" ? "text-white" : ""
              }`}
            >
              <p className="btn-link">__ PROJECTS</p>
            </button>
          </div>

          <div className="download">
            <a href={cv} className="btn-link cursor-pointer" download>
              __ CV download
            </a>
          </div>

          <div className="flex flex-row justify-center lg:hidden pt-8 md:py-4 -translate-x-8 sm:-translate-x-16">
            <button
              onClick={() => handleAbout("about")}
              className={`p-2 transition duration-300 ease-in-out md:text-xl ${
                activeButton === "about" ? " text-white text-lg" : ""
              }`}
            >
              <p className="">ABOUT</p>
            </button>

            <button
              onClick={() => handleProjects("projects")}
              className={`p-2 transition-transform duration-300 ease-in transform md:text-xl ${
                activeButton === "projects" ? "text-white text-lg" : ""
              }`}
            >
              <p className="">PROJECTS</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeInfo;
