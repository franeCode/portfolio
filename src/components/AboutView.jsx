import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

function AboutView({ changeContent, showContent, setShowContent }) {
  return (
    <>
        <p>
        Hello! I'm Ana, a full-stack developer with a background in social
        anthropology. I've been coding for more than a year and I'm passionate
        about creating beautiful and secure web applications using JavaScript
        and Python. My social anthropology background enhances my human-centered
        approach to web development, making digital experiences inclusive and
        impactful. I'm eager to connect, learn, collaborate, and explore new
        projects.
      </p>
      <div>
        <button onClick={() => changeContent()}>
            <p className="download">PROJECTS <FaArrowRight /></p>
        </button>
      </div>
      <div className="social-wrapper">
      <p>
        Feel free to explore my work and get in touch to discuss potential
        collaborations or simply to share your love for coding or music.
      </p>
        <div className="social-icons">
          <NavLink to="mailto:franjetina@gmail.com">
            <MdEmail />
          </NavLink>
          <NavLink to="https://www.linkedin.com/" target="_blank">
            <FaGithub />
          </NavLink>
          <NavLink to="https://www.linkedin.com/" target="_blank">
            <FaLinkedin />
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default AboutView