import React from "react";

// import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import html from "../assets/icons8-html-5.svg";
import css from "../assets/icons8-css.svg";
import javascript from "../assets/icons8-javascript.svg";
import react from "../assets/icons8-react.svg";
import python from "../assets/icons8-python.svg";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import cv from "../../CV_A.Popovic.pdf";
import { SlCloudDownload } from "react-icons/sl";

function AboutView() {
  return (
    <>
      <div className="about-wrapper content-wrapper">
        <div>
          Hello! I'm Ana, and I love creating beautiful and accessible web
          applications. My coding journey started as a hobby a year ago, and
          I've been hooked ever since. Using JavaScript and Python, along with
          their frameworks and libraries, I create experiences that meet users'
          needs and empower applications. Previously, I worked as a researcher
          focusing on cultural diversity, education, and heritage. Now, I'm
          applying my anthropological approach and experience to coding, aiming
          to create more diverse and inclusive applications for everyone.
        </div>

        {/* <div className="flex flex-col"> 
        <p className="">Skillset</p> 
          <div className="tech">
            <FaHtml5 />
            <img src={css} alt="CSS"></img>
            <RiJavascriptFill />
            <FaReact />
            <FaPython />
            <FaBootstrap />
            <SiTailwindcss/>
            <SiFlask />
            <BsFiletypeSql />
            </div>
          </div> */}

        <div>
          Beyond coding, I find joy in exploring music with my guitar and piano
          which influences my innovative problem-solving approach in
          development.
        </div>

        <div>
          If you share a similar vision or if you're looking for a passionate
          developer to bring creative ideas to life, I would love to connect,
          learn, and collaborate with you.
        </div>

        <div className="social-wrapper -ml-8">
          <div className="social-icons">
            <div className="lg:hidden text-xl">
              <a href={cv} className="cursor-pointer" download>
                <SlCloudDownload />
              </a>
            </div>
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
    </>
  );
}

export default AboutView;
