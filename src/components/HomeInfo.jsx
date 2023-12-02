import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo-vector.png";
import { SlCloudDownload } from "react-icons/sl";
// import { FaArrowRight } from "react-icons/fa";
import html from "../assets/icons8-html-5.svg";
import css from "../assets/icons8-css.svg";
import javascript from "../assets/icons8-javascript.svg";
import react from "../assets/icons8-react.svg";
import python from "../assets/icons8-python.svg";
import cv from "../../A.Popovic_CV.pdf";

function HomeInfo() {
  return (
    <>
    <div className="small-wrapper">
            <div className="">
              <img src={logo} alt="logo-img" />
            </div>
            <div className="tech">
              <img src={html}></img>
              <img src={css}></img>
              <img src={javascript}></img>
              <img src={react}></img>
              <img src={python}></img>
            </div>

            <div className="download">
              <p>Download resume</p>
              <a href={cv} download>
                <SlCloudDownload />
              </a>
            </div>

            {/* <div>
        <NavLink to="/projects">
            <p className="download">PROJECTS <FaArrowRight /></p>
        </NavLink>
      </div> */}
      </div>
    </>
  )
}

export default HomeInfo