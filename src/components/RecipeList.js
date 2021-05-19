import React,{useState,useEffect} from 'react'
import Recipe from './Recipe'
import RecipeEdit from './RecipeEdit'
import '../css/recipe-list.css'
import { v4 as uuidv4 } from 'uuid';

export const RecipeContext = React.createContext()

const recipeListsJson = [
    {
        id: 1,
        name: "Plain chicken",
        servings: 3,
        cookTime: "3:45",
        instructions: "1. Put Salt on chicken\n2. Pur chicken on Oven\n 3. Cook for 34 mins",
        ingredients:
            [{
                id: 1,
                name: "Chicken",
                amount: "2 pounds"
            },
            {
                id: 2,
                name: "Salt",
                amount: "2 tbl spoon"
            }]
    },
    {
        id: 2,
        name: "Plain Pork",
        servings: 5,
        cookTime: "12:23",
        instructions: "1. Put Salt on Pork\n2. Pur Pork on Oven\n 3. Cook for 55 mins",
        ingredients:
            [{
                id: 1,
                name: "Pork",
                amount: "3.7 pounds"
            },
            {
                id: 2,
                name: "Vinegar",
                amount: "3 tbl spoon"
            }]
    }
]



export default function RecipeList() {

    const [recipes,setRecipes] = useState(recipeListsJson)
    const [editRecipeId,updateEditRecipeId] = useState()
    const LOCAL_STORAGE_KEY = 'cooking.recipes'
    const editRecipe = recipes.find( recipe => recipe.id === editRecipeId)

    useEffect(() => {
        if(localStorage.getItem(LOCAL_STORAGE_KEY) !== null) 
        setRecipes(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))

    },[])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(recipes))
    },[recipes])

   

     const handleRecipeAdd = () => {
        const newRecipe ={
            id:uuidv4(),
            name: "new",
            servings: 1,
            cookTime: "0:45",
            instructions: "1. Put Salt on beef\n2. Pur beef on Oven\n 3. Cook for 34 mins",
            ingredients:
                [{
                    id: uuidv4(),
                    name: "beef",
                    amount: "2 pounds"
                },
                {
                    id: 2,
                    name: "Salt",
                    amount: "2 tbl spoon"
                }]
        
        }

        setRecipes([...recipes,newRecipe])
    }

    const handleRecipeDelete = id  => setRecipes(recipes.filter( recipe => recipe.id !== id ))

    const handleRecipeEdit = id => updateEditRecipeId(id )

    const updateRecipes = (id,changeRecipe) =>{
        let index = recipes.findIndex( recipe => recipe.id === id)
        let newRecipe = [...recipes]
         newRecipe[index] = changeRecipe
         setRecipes(newRecipe)
         
    }

    return (
        <RecipeContext.Provider value={{handleRecipeDelete,handleRecipeEdit,updateRecipes}}>
        <div className="recipelist">
            <div>
                {recipes.map(recipe => (
                    <Recipe key={recipe.id} Cooking={recipe}  />

                ))}
            </div>
            <div className="recipelist_add">
                <button className="btn btn--primary" onClick={handleRecipeAdd}> Add Recipe</button>
            </div>
        </div>
        {editRecipe && <RecipeEdit cooking={editRecipe}/>}
        </RecipeContext.Provider>
    )
}