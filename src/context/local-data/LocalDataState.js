import React, { useEffect, useReducer } from 'react';

import { AppActionTypes } from '../app.types';
import LocalDataContext from './LocalDataContext';
import LocalDataReducer from './LocalDataReducer';

const {
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    ADD_FAV,
    REMOVE_FAV,
    ADD_GROCERY_ITEM,
    REMOVE_GROCERY_ITEM
} = AppActionTypes;

const LocalDataState = props => {

    // Initial State
    const initialState = {
        ingredients: JSON.parse(localStorage.getItem("ingredients")) || [],
        favs: JSON.parse(localStorage.getItem("favs")) || [],
        groceryItems: JSON.parse(localStorage.getItem("groceryItems")) || []
    }

    // Use Reducer
    const [state, dispatch] = useReducer(LocalDataReducer, initialState);

    // Pull data from local storage
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

    return <LocalDataContext.Provider
        value={{
            ingredients: state.ingredients,
            favs: state.favs,
            groceryItems: state.groceryItems,
            addIngredient,
            removeIngredient,
            addFav,
            removeFav,
            addGroceryItem,
            removeGroceryItem
        }}
    >
        {props.children}
    </LocalDataContext.Provider>
}

export default LocalDataState;