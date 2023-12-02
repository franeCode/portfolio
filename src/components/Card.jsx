import React from 'react'

import recipeimg from '../assets/dish-diary.png'

function Card() {
  return (
    <>
        <div className='card'>
            
            <div className=''>
                <h1>DishDiary</h1>
                <div className='card-img'>
                    <img src={recipeimg} alt="dish-diary" />
                </div>
                <p>DishDiary is a fullstack application that simplifies the way you manage, share, and explore delicious recipes. 
                  Upon the first visit, users have the option to register and log in. To ensure security, DishDiary employs JWT token-based authentication, safeguarding user accounts and data.
                  Creating a recipe is a breeze with DishDiary. Users can fill out a recipe form and even upload images to make their culinary masterpieces visually appealing. Once a recipe is created, users can effortlessly share it with others.</p>
                <p>Tech</p>
            </div>
        </div>
    </>
  )
}

export default Card