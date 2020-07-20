import React, { useEffect } from 'react';

import './RecipeSummary.scss';

const RecipeSummary = ({ recipe }) => {
    const { image, healthScore, readyInMinutes, servings, summary } = recipe;
    useEffect(() => {
        document.querySelector('.summary-content').innerHTML = summary;
    }, [])
    return (
        <div className="recipe-summary">
        
            <div className="img-n-score">
                <div className="recipe-img">
                    <img src={image} loading="lazy" alt="Recipe Thumbnail"/>
                </div>
                <ul>
                    <li>
                        <span>{healthScore}</span> 
                        <p>Health Score</p>
                    </li>
                    <li>
                        <span>{readyInMinutes}</span> 
                        <p>minutes</p>
                    </li>
                    <li>
                        <span>{servings}</span> 
                        <p>servings</p>
                    </li>
                </ul>
            </div>
            <div className="summary">
                <h2>Summary</h2>
                <div className="summary-content"></div>
            </div>
            
        </div>
    );
} 
 
export default RecipeSummary;