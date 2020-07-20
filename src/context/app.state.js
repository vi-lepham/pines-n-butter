import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

import { AppActionTypes } from './app.types';
import AppReducer from './app.reducer';
import AppContext from './app.context';

const {
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    ADD_FAV,
    REMOVE_FAV,
    ADD_GROCERY_ITEM,
    REMOVE_GROCERY_ITEM,
    GET_RECIPES,
    GET_RECIPE_DETAILS,
    GET_SUGGESTIONS,
    SET_IS_LOADING
} = AppActionTypes;


const AppProvider = props => {
    const initialState = {
        ingredients: JSON.parse(localStorage.getItem("ingredients")) || [],
        favs: JSON.parse(localStorage.getItem("favs")) || [],
        recipes: [],
        recipe: null,
        suggestions: [],
        groceryItems: JSON.parse(localStorage.getItem("groceryItems")) || [],
        isLoading: false
    }

    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("ingredients", JSON.stringify(state.ingredients));
        localStorage.setItem("favs", JSON.stringify(state.favs));
        localStorage.setItem("groceryItems", JSON.stringify(state.groceryItems));
    }, [state.ingredients, state.favs, state.groceryItems])

    // Add Ingredient
    const addIngredient = ingredient => dispatch({
        type: ADD_INGREDIENT,
        payload: ingredient
    })

    // Remove Ingredient
    const removeIngredient = id => dispatch({
        type: REMOVE_INGREDIENT,
        payload: id
    })

    // Add to Favorites
    const addFav = fav => dispatch({
        type: ADD_FAV,
        payload: fav
    })

    // Remove from Favorites
    const removeFav = id => dispatch({
        type: REMOVE_FAV,
        payload: id
    })

    // Add to grocery List
    const addGroceryItem = item => dispatch({
        type: ADD_GROCERY_ITEM,
        payload: item
    })

    // Remove from Favorites
    const removeGroceryItem = id => dispatch({
        type: REMOVE_GROCERY_ITEM,
        payload: id
    })

    // Set loading
    const setIsLoading = () => dispatch({
        type: SET_IS_LOADING
    })

    // Get Recipes
    const getRecipes = async query => {
        setIsLoading();
        try {
            const result = await axios({
                "method":"GET",
                "url":"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
                "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key":`${process.env.REACT_APP_API_KEY}`,
                "useQueryString":true
                },"params":{
                "number":"36",
                "ranking":"2",
                "ignorePantry":"false",
                "ingredients": `${query}`
                }
            })
            
            dispatch({
                type: GET_RECIPES,
                payload: result.data
            })
        } catch (error) {
            console.log(error.message)
        }
        
    }

    // Get Recipe Details
    const getRecipeDetails = async id => {
        setIsLoading();
        try {
            const result = await axios({
                "method":"GET",
                "url":`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
                "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key":`${process.env.REACT_APP_API_KEY}`,
                "useQueryString":true
                }
            });
            
            dispatch({
                type: GET_RECIPE_DETAILS,
                payload: result.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    // Get ingredient search suggestions
    const getSuggestions = async query => {
        if (!query) return;
        try {
            const result = await axios({
                "method":"GET",
                "url":"https://yummly2.p.rapidapi.com/feeds/auto-complete",
                "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"yummly2.p.rapidapi.com",
                "x-rapidapi-key":"fa4731b032msh92369af037d7705p14770cjsn207b06bbcf4e",
                "useQueryString":true
                },"params":{
                "q":`${query}`
                }
            })

            dispatch({
                type: GET_SUGGESTIONS,
                payload: result.data.ingredients
            })
            
        } catch (error) {
            console.log(error.message)
        }
    }

    return <AppContext.Provider 
        value={{
            ingredients: state.ingredients,
            favs: state.favs,
            recipes: state.recipes,
            recipe: state.recipe,
            suggestions: state.suggestions,
            groceryItems: state.groceryItems,
            isLoading: state.isLoading,
            addIngredient,
            removeIngredient,
            addFav,
            removeFav,
            addGroceryItem,
            removeGroceryItem,
            setIsLoading,
            getRecipes,
            getRecipeDetails,
            getSuggestions
        }}>
            {props.children}
        </AppContext.Provider>
}

export default AppProvider;
