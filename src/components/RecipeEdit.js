import React ,{useContext}from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import '../css/recipe-edit.css'
import {RecipeContext} from './RecipeList'

export default function RecipeEdit({cooking}) {

  const  {updateRecipes,handleRecipeEdit} = useContext(RecipeContext)
  const handleChange  = e =>{
    let {name,value} = e.target
    updateRecipes(cooking.id,{...cooking,[name]:value})
  }
    
  
  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button onClick={() =>  handleRecipeEdit('')} className="btn recipe-edit__remove-button">&times;</button>
      </div>
      <div className="recipe-edit__details-grid">
        <label
          htmlFor="name"
          className="recipe-edit__label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={cooking.name}
          onInput={(e) => handleChange(e)}
          className="recipe-edit__input" />
        <label
          htmlFor="cookTime"
          className="recipe-edit__label">
          Cook Time
        </label>
        <input
          type="text"
          name="cookTime"
          id="cookTime"
          value={cooking.cookTime}
          onInput={(e) => handleChange(e)}
          className="recipe-edit__input" />
        <label
          htmlFor="servings"
          className="recipe-edit__label">
          Servings
        </label>
        <input
          type="number"
          min="1"
          name="servings"
          id="servings"
          value={cooking.servings}
          onInput={(e) => handleChange(e)}
          className="recipe-edit__input" />
        <label
          htmlFor="instructions"
          className="recipe-edit__label">
          Instructions
        </label>
        <textarea
          name="instructions"
          className="recipe-edit__input"
          id="instructions" value= {cooking.instructions} onInput={(e) => handleChange(e)}>
          
          </textarea>
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {cooking.ingredients && 
         cooking.ingredients.map( (ingredient) => (
         <RecipeIngredientEdit key={ingredient.id} ingredient={ingredient} cooking={cooking} name={ingredient.name} amount={ingredient.amount}/>
        ))
      
      }
        
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button className="btn btn--primary">Add Ingredient</button>
      </div>
    </div>
  )
}