import { AppActionTypes } from './app.types';

const {
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    ADD_FAV,
    REMOVE_FAV,
    ADD_GROCERY_ITEM,
    REMOVE_GROCERY_ITEM,
    SET_IS_LOADING,
    GET_RECIPES,
    GET_RECIPE_DETAILS,
    GET_SUGGESTIONS
} = AppActionTypes;

export default (state, action) => {
    switch (action.type) {
        case ADD_INGREDIENT: 
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        case REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: state.ingredients.filter(ingredient => ingredient.id !== action.payload)
            };
        case ADD_FAV:
            return {
                ...state,
                favs: [...state.favs, action.payload]
            };
        case REMOVE_FAV:
            return {
                ...state,
                favs: state.favs.filter(fav => fav.id !== action.payload)
            };
        case ADD_GROCERY_ITEM:
            return {
                ...state,
                groceryItems: [...state.groceryItems, action.payload]
            };
        case REMOVE_GROCERY_ITEM:
            return {
                ...state,
                groceryItems: state.groceryItems.filter(item => item.id !== action.payload)
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                isLoading: false
            };
        case GET_RECIPE_DETAILS:
            return {
                ...state,
                recipe: action.payload,
                isLoading: false
            };
        case GET_SUGGESTIONS:
            return {
                ...state,
                suggestions: action.payload
            }
        default:
            return state;
    }
}