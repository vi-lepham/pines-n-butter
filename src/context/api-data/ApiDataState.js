import React, { useReducer } from 'react';
import axios from 'axios';

import { AppActionTypes } from '../app.types';
import ApiDataReducer from './ApiDataReducer';
import ApiDataContext from './ApiDataContext';

const {
    SET_IS_LOADING,
    GET_RECIPES,
    GET_RECIPE_DETAILS,
    GET_SUGGESTIONS
} = AppActionTypes;

const ApiDataState = props => {

    // Initial State
    const initialState = {
        isLoading: false,
        recipes: [],
        recipe: null,
        suggestions: []
    }

    // Use Reducer
    const [state, dispatch] = useReducer(ApiDataReducer, initialState);

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
                "x-rapidapi-key":`${process.env.REACT_APP_API_KEY}`,
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

    return <ApiDataContext.Provider 
        value={{
            isLoading: state.isLoading,
            recipes: state.recipes,
            recipe: state.recipe,
            suggestions: state.suggestions,
            setIsLoading,
            getRecipes,
            getRecipeDetails,
            getSuggestions
        }}
    >
        {props.children}
    </ApiDataContext.Provider>
}

export default ApiDataState;