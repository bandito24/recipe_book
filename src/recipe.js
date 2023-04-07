import react, { useState, useEffect } from 'react';

export default function Recipe({recipeTitle, recipeDescription, prepTime}){

    useEffect(() => {
        const duration = document.getElementById('duration')
        if (duration) {
            duration.classList.remove('fadeIn');
            duration.classList.add('fadeIn');
          }
    }, [prepTime])

    return(
        <div>
            <h1>{recipeTitle}</h1>
            <p>{recipeDescription}</p>
            
            { prepTime !== "" ? <h2 className="fadeIn">Prep Time is: <span id="duration" classList="fadeIn">{prepTime}</span> minutes</h2> : '' }
            { prepTime > 60 ? <p>..oh man, this is gonna take a while</p> : '' }
            
            


            


        </div>
    )
}