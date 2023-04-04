import React, { useState } from 'react';

export default function Ingredient({numIngredients, setNumIngredients, index, ingredientsArray, setIngredientsArray}){
const [ingredientList, setIngredientList] = useState([])

const handleRemove = (e) => {
    e.preventDefault()
    let classlist = document.getElementsByClassName("ingredients")
    let newIngredientsArray = []
    for(let i = 0; i < classlist.length; i++){
        newIngredientsArray.push(classlist[i])
    }
    const index = parseInt(e.target.parentNode.dataset.index);
    const location = newIngredientsArray.findIndex(obj => parseInt(obj.dataset.index) === index)
    newIngredientsArray = newIngredientsArray.splice(location, 1);
    setIngredientsArray(newIngredientsArray)
    setNumIngredients(prev => prev - 1)

}


    return( 
        <div data-index={index}   className="ingredients">
            <input type="text" placeholder="Ingredient" className="ingredient" required/>    
            <input type="text" placeholder="Measurement" id="ingredient-measurement" required/>
            <button onClick={handleRemove}>Remove Ingredient</button>
        </div>
    )
}