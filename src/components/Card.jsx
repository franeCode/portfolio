import React from "react";

import recipeimg from "../assets/dish-diary.png";
import html from "../assets/icons8-html-5.svg";
import css from "../assets/icons8-css.svg";
import flask from "../assets/icons8-flask.svg";
import react from "../assets/icons8-react.svg";
import python from "../assets/icons8-python.svg";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";

function Card() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="card-img pb-2">
            <img src={recipeimg} alt="dish-diary" />
          </div>
          <div className="relative pr-6">
            <h1 >DishDiary</h1>
            <FaUpRightFromSquare className="text-sm absolute right-1 top-1" />
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
          <FaCode />
        </div>
      </div>
    </>
  );
}

export default Card;
