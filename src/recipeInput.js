import React, { useState, useEffect } from 'react';
import Ingredient from './ingredient';

export default function RecipeInput(){
    const [numIngredients, setNumIngredients] = useState(3)
    const [ingredientsArray, setIngredientsArray] = useState([])

    const newIngredientsArray = []

    const handleAdd = (e) => {
        e.preventDefault();
        setNumIngredients(numIngredients + 1)
        console.log(numIngredients)
    }

    useEffect(() => {
        for(let i = 0; i < numIngredients; i++){
            newIngredientsArray.push(<Ingredient />)
        }
        setIngredientsArray(newIngredientsArray)
    }, [numIngredients])

   

    return(
        <div>
            <form>
                <label htmlFor="recipe-title">Please enter the name of your dish</label>
                <input type="text" placeholder="Yum!" id="recipe-title" required/>
                <br/>
                <label htmlFor="recipe-description">Please Provide a brief description</label>
                <textarea type="textarea" placeholder="Yum!" required id="recipe-description"/>

                <h5>Add Ingredient and measurement/quantity</h5>
                {ingredientsArray.map((value, index) => (
                    <Ingredient key={index} 
                    index={index}
                    setNumIngredients={setNumIngredients}
                    numIngredients={numIngredients}
                    ingredientsArray={ingredientsArray}
                    setIngredientsArray={setIngredientsArray}
                    />
                ))}
                <button onClick={handleAdd}>Add Another Ingredient</button>
            
            </form>

        </div>
    )
}