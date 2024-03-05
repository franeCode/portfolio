import React from "react";

import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import cv from "../../CV_A.Popovic.pdf";
import { SlCloudDownload } from "react-icons/sl";

function AboutView() {

  const openEmailPopup = () => {
    const email = 'franjetina@gmail.com';
    const subject = 'Subject for the email';
    const body = 'Body of the email';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoLink, 'EmailPopup', 'width=600,height=400');
  };

  return (
    <>
      <div className="about-wrapper content-wrapper">
        <div>
          Hello! I'm Ana, and I love creating beautiful and accessible web
          applications. My coding journey started as a hobby two years ago, and
          I've been hooked ever since. Using JavaScript and Python, along with
          their frameworks and libraries, I create experiences that meet users'
          needs and empower applications. Previously, I worked as a researcher
          focusing on cultural diversity, education, and heritage. Now, I'm
          applying my anthropological approach and experience to coding, aiming
          to create more diverse and inclusive applications for everyone.
        </div>

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
            <MdOutlineEmail className="cursor-pointer hover:animate-bounce" onClick={openEmailPopup} />
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
        </div>
      </div>
    </>
  );
}

export default AboutView;
