import React ,{useContext}from 'react'
import IngredientList from './IngredientList'
import  '../css/recipe.css'
import {RecipeContext} from './RecipeList'

export default function Recipe({Cooking}){
    const {handleRecipeDelete,handleRecipeEdit} = useContext(RecipeContext)
return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{Cooking.name}</h3>
        <div>
          <button className="btn btn--primary mr-1" onClick={()=> handleRecipeEdit(Cooking.id)}>Edit</button>
          <button onClick={()=> handleRecipeDelete(Cooking.id)} className="btn btn--danger">Delete</button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Cook Time:</span>
        <span className="recipe__value">{Cooking.cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Servings:</span>
        <span className="recipe__value">{Cooking.servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instructions:</span>
        <div className="recipe__value recipe__instructions recipe__value--indented">{Cooking.instructions}</div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingredients:</span>
        <div className="recipe__value recipe__value--indented">
          <IngredientList ingredients={Cooking.ingredients} />
        </div>
      </div>
    </div>
)

}