import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-vector.png";
import { SlCloudDownload } from "react-icons/sl";
import html from "../assets/icons8-html-5.svg";
import css from "../assets/icons8-css.svg";
import javascript from "../assets/icons8-javascript.svg";
import react from "../assets/icons8-react.svg";
import python from "../assets/icons8-python.svg";
import cv from "../../A.Popovic_CV.pdf";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function HomeInfo({ changeAbout, changeProjects }) {
  const [activeButton, setActiveButton] = useState();

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
        <div className="w-full lg:w-1/3 fixed top-0 lg:top-20 bg-main pt-6 px-2 lg:pt-0 z-20">
          <img src={logo} alt="logo-img" />
          <div className="tech">
            <img src={html} alt="HTML"></img>
            <img src={css} alt="CSS"></img>
            <img src={javascript} alt="JavaScript"></img>
            <img src={react} alt="React"></img>
            <img src={python} alt="Python"></img>
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

          <div className="flex flex-row justify-center lg:hidden pt-4 md:py-4 -ml-28">
            <button
              onClick={() => handleAbout("about")}
              className={`p-2 transition duration-300 ease-in-out md:text-xl ${
                activeButton === "about" ? " text-white text-lg" : ""
              }`}
            >
              <p className="mx-8">ABOUT</p>
              <p className="border border-bottom border-text w-[1.2rem] mx-8 text-start"></p>
            </button>

            <button
              onClick={() => handleProjects("projects")}
              className={`p-2 transition-transform duration-300 ease-in transform md:text-xl ${
                activeButton === "projects" ? "text-white text-xl" : ""
              }`}
            >
              <p className="">PROJECTS</p>
              <p className="border border-bottom border-text w-[1.2rem] text-start"></p>
            </button>
            
            
          </div>
          

          {/* <div className="download">
            <NavLink to="mailto:franjetina@gmail.com" className='btn-link cursor-pointer'>
            __ CONTACT
            </NavLink>
          </div> */}

          <div className="download">
            <a href={cv} className="btn-link cursor-pointer" download>
              {/* <SlCloudDownload  /> */}
              __ CV download
            </a>
          </div>

          <div className="social-wrapper text-sm py-10">
            <p>Feel free to explore my other work</p>
            <div className="social-icons">
              <MdOutlineEmail className="cursor-pointer hover:animate-bounce" />
              <NavLink to="https://github.com/franeCode" target="_blank">
                <FaGithub className="hover:animate-pulse" />
              </NavLink>
              <NavLink
                to="https://www.linkedin.com/in/ana-popovi%C4%87-57973247/"
                target="_blank"
              >
                <FaLinkedin className="hover:animate-pulse" />
              </NavLink>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeInfo;
