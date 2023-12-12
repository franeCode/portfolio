import React from "react";
import { Link } from "react-router-dom";

import calcubrain from "../assets/calcubrain.png";
import recipeimg from "../assets/dish-diary.png";
import meteor from "../assets/meteor-shower.png";
import html from "../assets/icons8-html-5.svg";
import css from "../assets/icons8-css.svg";
import javascript from "../assets/icons8-javascript.svg";
import flask from "../assets/icons8-flask.svg";
import react from "../assets/icons8-react.svg";
import python from "../assets/icons8-python.svg";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import { useState } from "react";

function ProjectView() {
  const [isDishDiaryClicked, setDishDiaryClicked] = useState(false);
  const [isMeteorShowerClicked, setMeteorShowerClicked] = useState(false);
  const [isCalcuBrainClicked, setCalcuBrainClicked] = useState(false);

  function handleClick(project) {
    if (project === "DishDiary") {
      setDishDiaryClicked(!isDishDiaryClicked);
      setMeteorShowerClicked(false);
      setCalcuBrainClicked(false);
    } else if (project === "MeteorShower") {
      setMeteorShowerClicked(!isMeteorShowerClicked);
      setDishDiaryClicked(false);
      setCalcuBrainClicked(false);
    } else if (project === "CalcuBrain") {
      setCalcuBrainClicked(!isCalcuBrainClicked);
      setDishDiaryClicked(false);
      setMeteorShowerClicked(false);
    }
  }

  return (
    <>
      <div className="cards-wrapper content-wrapper px-3 sm:px-0 xl:pt-0 xl:pl-14">
        <div className="card">
          <div className="card-header">
            <div className="card-img pb-2">
              <img src={recipeimg} alt="dish-diary" />
            </div>
            <div className="relative pr-6">
              {isDishDiaryClicked && (
                <div className="link-container">
                  <span className="">
                    <Link className="text-center">
                      <FaPlay />
                    </Link>
                  </span>
                  <span className="">
                    <Link className="text-center">
                      <FaCode className="cursor-pointer" />{" "}
                    </Link>
                  </span>
                </div>
              )}
              <h1>DishDiary</h1>
              <FaUpRightFromSquare
                onClick={() => handleClick("DishDiary")}
                className="text-sm absolute right-1 top-1 cursor-pointer hover:animate-pulse"
              />
            </div>
          </div>
          <p>
          DishDiary is focused on recipe management, allowing users to add, share, and delete recipes. To enhance user experience, I integrated a search component, enabling users to explore recipes beyond the app by fetching data from an external API. The technology stack includes React for the frontend, Flask for the backend, sqlAlchemy for database management, and JWT tokens for security implementation.
          </p>

          <div className="card-tech">
            <img src={html}></img>
            <img src={css}></img>
            <img src={react}></img>
            <img src={flask}></img>
            <img src={python}></img>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-img pb-2">
              <img src={meteor} alt="meteor-shower" />
            </div>
            <div className="relative pr-6">
              {isMeteorShowerClicked && (
                <div className="link-container">
                  <span className="">
                    <Link
                      to="https://ornate-gumption-94dfce.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center"
                    >
                      <FaPlay />
                    </Link>
                  </span>
                  <span className="">
                    <Link className="text-center">
                      <FaCode className="cursor-pointer" />
                    </Link>
                  </span>
                </div>
              )}
              <h1>Meteor Shower</h1>
              <FaUpRightFromSquare
                onClick={() => handleClick("MeteorShower")}
                className="text-sm absolute right-1 top-1 cursor-pointer hover:animate-pulse"
              />
            </div>
          </div>
          <p>
          Developed by my Chingu team, this app is focused  on global meteorite impact exploration with its intuitive search tools. Users can filter results by name, year, composition, and mass, and visualize findings in table or map format. I had the privilege of serving as a lead developer on this project and earned an MVP badge from my dedicated team.
          </p>

          <div className="card-tech">
            <img src={html}></img>
            <img src={css}></img>
            <img src={javascript}></img>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-img pb-2">
              <img src={calcubrain} alt="calcubrain" />
            </div>
            <div className="relative pr-6">
              {isCalcuBrainClicked && (
                <div className="link-container">
                  <span className="">
                    <Link
                      to="https://calcubrain.anapopovic.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center"
                    >
                      <FaPlay />
                    </Link>
                  </span>
                  <span className="">
                    <Link className="text-center">
                      <FaCode className="cursor-pointer" />
                    </Link>
                  </span>
                </div>
              )}
              <h1>CalcuBrain</h1>
              <FaUpRightFromSquare
                onClick={() => handleClick("CalcuBrain")}
                className="text-sm absolute right-1 top-1 cursor-pointer hover:animate-pulse"
              />
            </div>
          </div>
          <p>
            CalcuBrain is a basic calculator application that includes keyboard
            input functionality, addition, subtraction, multiplication, division
            and persentage. This project was developed using Object-Oriented
            Programming (OOP) principles and served as an excellent learning
            experience.
          </p>

          <div className="card-tech">
            <img src={html}></img>
            <img src={css}></img>
            <img src={javascript}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectView;
