import React from 'react';

export default function Ingredient(){
    return( 
        <div>
            <input type="text" placeholder="Ingredient" className="ingredient" required/>    
            <input type="text" placeholder="Measurement" id="ingredient-measurement" required/>
        </div>
    )
}