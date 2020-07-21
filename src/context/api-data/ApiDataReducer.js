import { AppActionTypes } from '../app.types';

const {
    SET_IS_LOADING,
    GET_RECIPES,
    GET_RECIPE_DETAILS,
    GET_SUGGESTIONS
} = AppActionTypes;

export default (state, action) => {
    switch(action.type) {
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