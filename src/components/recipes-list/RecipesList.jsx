import React from 'react';

import RecipeCard from '../recipe-card/RecipeCard';

const RecipesList = ({ recipes }) => (
    <div className="recipes-list">
        { recipes.map(recipe => 
            <RecipeCard key={recipe.id} recipe={recipe} />
        )}
    </div>
)
 
export default RecipesList;