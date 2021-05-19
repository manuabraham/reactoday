import React, { useContext } from 'react'
import { RecipeContext } from './RecipeList'

export default function RecipeIngredientEdit({ ingredient, cooking, name, amount }) {

  const { updateRecipes } = useContext(RecipeContext)

  const handleChangeIngredient = e => {

    const { name, value } = e.target
    const newIngredient = { ...ingredient, [name]: value }
    const newCookingIngredients = [...cooking.ingredients]
    const index = cooking.ingredients.findIndex(ing => ing.id === ingredient.id)
    newCookingIngredients[index] = newIngredient
    updateRecipes(cooking.id, { ...cooking, 'ingredients': newCookingIngredients })

  }

  const handleDeleteIngredient = id => {

    const newCookingIngredients = [...cooking.ingredients]
    const index = cooking.ingredients.findIndex(ing => ing.id === id)
    newCookingIngredients.splice(index,1) 
    updateRecipes(cooking.id, { ...cooking, 'ingredients': newCookingIngredients })

  }
  return (
    <>

      <input value={name} name="name" onInput={(e) => handleChangeIngredient(e)} className="recipe-edit__input" type="text" />
      <input value={amount} name="amount" onInput={(e) => handleChangeIngredient(e)} className="recipe-edit__input" type="text" />
      <button onClick={() => handleDeleteIngredient(ingredient.id)} className="btn btn--danger">&times;</button>

    </>
  )
}