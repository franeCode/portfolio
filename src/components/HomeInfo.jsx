import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo-vector.png";
import { SlCloudDownload } from "react-icons/sl";
import html from "../assets/icons8-html-5.svg";
import css from "../assets/icons8-css.svg";
import javascript from "../assets/icons8-javascript.svg";
import react from "../assets/icons8-react.svg";
import python from "../assets/icons8-python.svg";
import cv from "../../A.Popovic_CV.pdf";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function HomeInfo({ changeContent }) {
  const [activeButton, setActiveButton] = useState('__ PROJECTS');

  const handleButtonClick = () => {
    const nextButton = activeButton === '__ ABOUT' ? '__ PROJECTS' : '__ ABOUT';
    changeContent();
    setActiveButton(nextButton);
  };

  return (
    <>
      <div className="small-wrapper">
        <div className='lg:fixed top-20'>
          <img src={logo} alt="logo-img" />
          <div className="tech">
            <img src={html} alt="HTML"></img>
            <img src={css} alt="CSS"></img>
            <img src={javascript} alt="JavaScript"></img>
            <img src={react} alt="React"></img>
            <img src={python} alt="Python"></img>
          </div>

          <div className='links'>
            <button onClick={handleButtonClick} className='p-2'>
              <p className={`btn-link ${activeButton === '__ ABOUT' ? 'active' : ''}`}>
                {activeButton}
              </p>
            </button>
          

          <div className="download">
            <NavLink to="mailto:franjetina@gmail.com" className='btn-link cursor-pointer'>
            __ CONTACT
              {/* <MdEmail className='hover:animate-bounce' /> */}
            </NavLink>
          </div>

          <div className="download">
            <a href={cv} className='btn-link cursor-pointer' download>
              {/* <SlCloudDownload  /> */}
              __ CV
            </a>
          </div>

          <div className='social-wrapper py-10'>
            <p>Feel free to explore my other work</p>
            <div className="social-icons">
            <NavLink to="https://github.com/franeCode" target="_blank">
              <FaGithub />
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/ana-popovi%C4%87-57973247/" target="_blank">
              <FaLinkedin />
            </NavLink>
          </div>
          </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default HomeInfo;
