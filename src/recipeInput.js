import React, { useState } from 'react';
import Ingredient from './ingredient';

export default function RecipeInput(){
    const [numIngredients, setNumIngredients] = useState(3)
    const ingredientsArray = []


    const handleClick = (e) => {
        e.preventDefault();
        setNumIngredients(numIngredients + 1)
        console.log(numIngredients)
    }

    for(let i = 0; i < numIngredients; i++){
               ingredientsArray.push(<Ingredient />)
    }

    return(
        <div>
            <form>
                <label htmlFor="recipe-title">Please Enter the name of your dish</label>
                <input type="text" placeholder="Yum!" id="recipe-title" required/>
                <br/>
                <label htmlFor="recipe-description">Please Provide a brief description</label>
                <textarea type="textarea" placeholder="Yum!" required id="recipe-description"/>

                <h5>Add Ingredient and measurement/quantity</h5>
                {ingredientsArray.map((value, index) => (
                    <Ingredient key={index} />
                ))

                }<button onClick={handleClick}  >Add Another Ingredient</button>
               



            </form>


        </div>
    )
}