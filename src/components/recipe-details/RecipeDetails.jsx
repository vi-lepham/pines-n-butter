import React from 'react';

import FaveHeart from '../fave-heart/FaveHeart';
import RecipeSummary from '../recipe-summary/RecipeSummary';
import RecipeInstructions from '../recipe-instructions/RecipeInstructions';
import RecipeIngredients from '../recipe-ingredients/RecipeIngredients';

import './RecipeDetails.scss';

const RecipeDetails = ({ recipe }) => {
    const { analyzedInstructions, extendedIngredients } = recipe;
    
    return (
        <div className="recipe-details">
            <RecipeSummary className='recipe-summary' recipe={recipe} />
            <RecipeInstructions className='recipe-instructions' analyzedInstructions={analyzedInstructions} />
            <RecipeIngredients className='recipe-ingredients' extendedIngredients={extendedIngredients} recipe={recipe} />
            <FaveHeart className='fave-heart' recipe={recipe} />
        </div>
    )
}

export default RecipeDetails;