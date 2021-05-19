import React from 'react'
import Ingredient from './Ingredient'
import '../css/ingredient-list.css'

export default function IngredientList({ ingredients }) {
    return (
        <div className="ingredient-grid">
        {
            ingredients.map(ingredient => (
                <Ingredient key={ingredient.id} {...ingredient}/>
            ))
        }
        </div>


    )
}