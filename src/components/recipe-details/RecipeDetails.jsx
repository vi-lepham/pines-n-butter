import React from 'react';

import FaveHeart from '../fave-heart/FaveHeart';
import RecipeSummary from '../recipe-summary/RecipeSummary';
import RecipeInstructions from '../recipe-instructions/RecipeInstructions';
import RecipeIngredients from '../recipe-ingredients/RecipeIngredients';

import './RecipeDetails.scss';

const RecipeDetails = ({ recipe }) => {
    const { title, sourceName, analyzedInstructions, extendedIngredients } = recipe;
    return (
        <div className="recipe-details">
            <div className="title-block">
                <div className="title">
                    <h1>{title}</h1>
                    <p>{sourceName}</p>
                </div>
                <FaveHeart recipe={recipe} />
            </div>
            <div className="content-block">
                <RecipeSummary recipe={recipe} />
                <div className="details">
                    <RecipeInstructions analyzedInstructions={analyzedInstructions} />
                    <RecipeIngredients extendedIngredients={extendedIngredients} recipe={recipe} />
                </div>
            </div>
        </div>
    )
}

export default RecipeDetails;