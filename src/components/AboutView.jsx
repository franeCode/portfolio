import React from "react";

// import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

function AboutView() {
  return (
    <>
      <div className="about-wrapper">
        <p>
          Hello! I'm Ana, a dedicated full-stack developer with a profound
          passion for creating beautiful and secure web applications. Over the
          past year, I've had the privilege of contributing to numerous
          projects, showcasing my expertise in JavaScript and Python. Whether
          working independently or collaboratively, my goal is to craft digital
          experiences that seamlessly blend aesthetics with functionality.
        </p>

        <p>
          In addition to my technical journey, my academic background in Social
          Anthropology has shaped my approach to web development. Years of
          researching and collaborating with diverse groups have instilled in me
          a deep appreciation for a human-centered perspective. I believe in the
          power of technology to be inclusive and accessible to everyone.
        </p>

        <p>
          When I'm not immersed in lines of code, you'll find me immersed in the
          world of music, playing my guitar and piano or discovering new tunes.
          This creative outlet not only adds a unique dimension to my life but
          also influences my innovative problem-solving approach in development.
        </p>

        <p>
          I'm not just a developer; I'm an advocate for making technology a
          force for good. If you share a similar vision or if you're looking for
          a passionate developer to bring creative ideas to life, I would love
          to connect, learn, and collaborate with you.
        </p>

        {/* <div className='py-8'>
        <button onClick={() => changeContent()}>
            <p className="download">PROJECTS <FaArrowRight /></p>
        </button>
      </div> */}
        <div className="">
          {/* <p>
        Feel free to explore my work and get in touch to discuss potential
        collaborations or simply to share your love for coding or music.
      </p> */}
          
        </div>
      </div>
    </>
  );
}

export default AboutView;
