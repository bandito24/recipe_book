import React, { useState, useEffect } from 'react';
import Ingredient from './ingredient';
import Recipe from './recipe';

export default function RecipeInput(){
   
const [recipeTitle, setRecipeTitle] = useState('My Recipe')
const [recipeDescription, setRecipeDescription] = useState('')
const [prepTime, setPrepTime] = useState('')


 function handleTitleChange(e){
        setRecipeTitle(e.target.value)
 }

 function handleDescriptionChange(e){
    setRecipeDescription(e.target.value)
 }
 function handlePrepChange(e){
    setPrepTime(e.target.value)
 }

   

    return(
        <div id="add-recipe-page">
            <div id="input-side">
            <form>

                <label htmlFor="recipe-title">Please enter the name of your dish</label>
                <input type="text" placeholder="Yum!" id="recipe-title" required onChange={handleTitleChange}/>
                <br/>
                <label htmlFor="recipe-description">Please Provide a brief description of your meal</label>
                <textarea type="textarea" placeholder="Yum!" required id="recipe-description" onChange={handleDescriptionChange}/>
                <br/>
                <label htmlFor="cook-time">How long will this take to prepare?</label>
                <input type="number" placeholder="Time in minutes" id="cook-time" min="0" step="5" onChange={handlePrepChange} required/><p>Minutes</p>
                

                <h5>Add Ingredient and measurement/quantity</h5>
                <div className="ingredients">
                    <input type="text" placeholder="Ingredient" className="ingredient" required/>    
                    <input type="text" placeholder="Measurement" id="ingredient-measurement" required/>
                    <button>Add Ingredient</button>
                </div>
                <h5>Add a preparation step</h5>
                <div className="ingredients">
                    <label htmlFor="step">Please Provide a brief description</label>
                    <textarea type="textarea" placeholder="Please provide a single-step for preparing this meal" required id="step"/>
                    <button>Add Instruction</button>
                </div>
            </form>
            </div>
            <div id="preview-side">
                <Recipe 
                recipeTitle={recipeTitle}
                recipeDescription={recipeDescription}
                prepTime={prepTime}
                />
            </div>


        </div>
    )
}