import React from 'react';

import './RecipeSummary.scss';

const RecipeSummary = ({ recipe }) => {
    const { image, healthScore, readyInMinutes, servings, sourceName, title } = recipe;
    return (
        <div className="recipe-summary">
            <h1>{title}</h1>
            <div className="recipe-img">
                <img src={image} loading="lazy" alt="Recipe Thumbnail"/>
            </div>
            <ul>
                <li>Health Score {healthScore}</li>
                <li>{readyInMinutes} minutes</li>
                <li>{servings} servings</li>
            </ul>
            <p>{sourceName}</p>
        </div>
    );
}
 
export default RecipeSummary;