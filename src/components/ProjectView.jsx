import React from "react";
import { useNavigate } from "react-router-dom";

import calcubrain from "../assets/calcubrain.png"
import recipeimg from "../assets/dish-diary.png";
import meteor from "../assets/meteor-shower.png"
import html from "../assets/icons8-html-5.svg";
import css from "../assets/icons8-css.svg";
import javascript from "../assets/icons8-javascript.svg";
import flask from "../assets/icons8-flask.svg";
import react from "../assets/icons8-react.svg";
import python from "../assets/icons8-python.svg";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { HiArrowNarrowLeft } from "react-icons/hi";

function ProjectView({ changeContent }) {
  const navigate = useNavigate()
  
  return (
    <>
    <div className="cards-wrapper overflow-y-hidden">
        {/* <div className="w-full flex justify-start items-center">
        <button onClick={() => changeContent()}>
        <HiArrowNarrowLeft className="w-1/3" />
        </button>
        
        <p className="text-4xl mb-2">PROJECTS</p>
        </div> */}
      <div className="card">
        <div className="card-header">
          <div className="card-img pb-2">
            <img src={recipeimg} alt="dish-diary" />
          </div>
          <div className="relative pr-6">
            <h1 >DishDiary</h1>
            <FaUpRightFromSquare className="text-sm absolute right-1 top-1 cursor-pointer" />
          </div>
          {/* <FaCode /> */}
        </div>
        <p>
          DishDiary streamlines recipe management, sharing, and exploration with
          secure JWT token-based authentication. Effortlessly create and share
          culinary delights, enhancing the culinary experience for users.
        </p>

        <div className="card-tech">
          <img src={html}></img>
          <img src={css}></img>
          <img src={react}></img>
          <img src={flask}></img>
          <img src={python}></img>
          <FaCode className="cursor-pointer" />
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="card-img pb-2">
            <img src={meteor} alt="meteor-shower" />
          </div>
          <div className="relative pr-6">
            <h1>Meteor Shower</h1>
            <FaUpRightFromSquare className="text-sm absolute right-1 top-1 cursor-pointer" />
          </div>
          {/* <FaCode /> */}
        </div>
        <p>
        Developed by my Chingu team, streamlines global meteorite impact exploration with its intuitive search tools. Easily filter results by name, year, composition, and mass, and visualize your findings in table or map format. I had the privilege of serving as a lead developer on this project and earned an MVP badge from my dedicated team.
        </p>

        <div className="card-tech">
          <img src={html}></img>
          <img src={css}></img>
          <img src={javascript}></img>
          <FaCode className="cursor-pointer" />
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="card-img pb-2">
            <img src={calcubrain} alt="calcubrain" />
          </div>
          <div className="relative pr-6">
            <h1>CalcuBrain</h1>
            <FaUpRightFromSquare className="text-sm absolute right-1 top-1 cursor-pointer" />
          </div>
          {/* <FaCode /> */}
        </div>
        <p>
        CalcuBrain is a basic calculator application that includes keyboard input functionality, addition, subtraction, multiplication, division and persentage. This project was developed using Object-Oriented Programming (OOP) principles and served as an excellent learning experience.
        </p>

        <div className="card-tech">
          <img src={html}></img>
          <img src={css}></img>
          <img src={javascript}></img>
          <FaCode className="cursor-pointer" />
        </div>
      </div>


      </div>
    </>
  )
}

export default ProjectView