import React from "react";
import { Link } from "react-router-dom";

import calcubrain from "../assets/calcubrain.png";
import recipeimg from "../assets/dish-diary.png";
import meteor from "../assets/meteor-shower.png";
import cryptoview from "../assets/cryptoview.png";
import html from "../assets/icons8-html-5.svg";
import css from "../assets/icons8-css.svg";
import javascript from "../assets/icons8-javascript.svg";
import flask from "../assets/icons8-flask.svg";
import react from "../assets/icons8-react.svg";
import python from "../assets/icons8-python.svg";
import sql from "../assets/icons8-sql.png";
import node from "../assets/icons8-node-js.svg";
import mongo from "../assets/icons8-mongo-db.png";
import tailwind from "../assets/icons8-tailwind-css.svg";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import { useState } from "react";

function ProjectView() {
  const [isDishDiaryClicked, setDishDiaryClicked] = useState(false);
  const [isMeteorShowerClicked, setMeteorShowerClicked] = useState(false);
  const [isCalcuBrainClicked, setCalcuBrainClicked] = useState(false);
  const [isCryptoClicked, setIsCryptoClicked] = useState(false);


  function handleClick(project) {
    if (project === "DishDiary") {
      setDishDiaryClicked(!isDishDiaryClicked);
      setMeteorShowerClicked(false);
      setCalcuBrainClicked(false);
      setIsCryptoClicked(false);
    } else if (project === "MeteorShower") {
      setMeteorShowerClicked(!isMeteorShowerClicked);
      setDishDiaryClicked(false);
      setCalcuBrainClicked(false);
      setIsCryptoClicked(false);
    } else if (project === "CalcuBrain") {
      setCalcuBrainClicked(!isCalcuBrainClicked);
      setDishDiaryClicked(false);
      setMeteorShowerClicked(false);
      setIsCryptoClicked(false);
    }
    else if (project == "CryptoView") {
      setIsCryptoClicked(!isCryptoClicked);
      setMeteorShowerClicked(false);
      setDishDiaryClicked(false);
      setCalcuBrainClicked(false);
    }
  }

  return (
    <>
      <div className="cards-wrapper content-wrapper px-3 sm:px-0 xl:pt-0 xl:pl-14">
        <div className="card">
          <div className="card-header">
            <div className="card-img pb-2">
              <img src={cryptoview} alt="cryptoview-app" />
            </div>
            <div className="relative pr-6">
              {isCryptoClicked && (
                <div className="link-container">
                  <span className="">
                    <Link to="https://cryptoview-us13.onrender.com/" className="text-center" target="_blank">
                      <FaPlay />
                    </Link>
                  </span>
                  <span className="">
                    <Link to="https://github.com/chingu-voyages/v47-tier2-team-15" className="text-center" target="_blank">
                      <FaCode className="cursor-pointer" />{" "}
                    </Link>
                  </span>
                </div>
              )}
              <h1>CryptoView</h1>
              <FaUpRightFromSquare
                onClick={() => handleClick("CryptoView")}
                className="text-sm absolute right-1 top-1 cursor-pointer hover:animate-pulse"
              />
            </div>
          </div>
          <p>
          In an Agile development environment, my Chingu team successfully executed a project spanning six sprints, adopting the MERN stack. As frontend developer, I leveraged React with Vite for efficient development, employed ContextAPI for state management, and implemented smooth navigation using React Router. For an enhanced user experience, I ensured a sleek and responsive design using TailwindCSS.
          </p>

          <div className="card-tech pt-2">
          {/* <button class="py-2 px-4 shadow-md no-underline rounded-full bg-blue text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">React</button>
          <button class="py-2 px-4 shadow-md no-underline rounded-full bg-blue text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">Vite</button>
          <button class="py-2 px-4 shadow-md no-underline rounded-full bg-blue text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">Tailwind</button>
          <button class="py-2 px-4 shadow-md no-underline rounded-full bg-blue text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">NodeJS</button>
          <button class="py-2 px-4 shadow-md no-underline rounded-full bg-blue text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">MongoDB</button> */}
            <img src={react}></img>
            <img src={tailwind}></img>
            <img src={node}></img>
            <img src={mongo}></img>
          </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-img pb-2">
                <img src={recipeimg} alt="dish-diary" />
              </div>
              <div className="relative pr-6">
                {isDishDiaryClicked && (
                  <div className="link-container">
                    <span className="">
                      <Link to="https://dish-diary-9993d7a31702.herokuapp.com/" className="text-center" target="_blank">
                        <FaPlay />
                      </Link>
                    </span>
                    <span className="">
                      <Link to="https://github.com/franeCode/DishDiary" className="text-center" target="_blank">
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
              <img src={sql}></img>
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
                      <Link to="https://github.com/chingu-voyages/v45-tier1-team-03" className="text-center" target="_blank">
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
                      <Link to="https://github.com/franeCode/CalcuBrain" className="text-center"
                        target="_blank" >
                        <FaCode
                          className="cursor-pointer"
                        />
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
