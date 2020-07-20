import React, { useContext } from 'react';

import AppContext from '../../context/app.context';

import './RecipeIngredients.scss';

const RecipeIngredients = ({ extendedIngredients, recipe }) => {
    const { id, title, image } = recipe;
    const { addGroceryItem } = useContext(AppContext);
 
    return (
        <div className="recipe-ingredients">
            <h2>Ingredients</h2>
            <ul className="ingredients">
                {
                    extendedIngredients.map(
                        ingredient => 
                        <li key={ingredient.id}>
                            <h4>{ingredient.original}</h4>
                            <div className="add-ingredient-to-gl">
                                <i 
                                    className="fa fa-plus-circle" 
                                    onClick={() => addGroceryItem({ 
                                        id: ingredient.id, 
                                        name: ingredient.name, 
                                        recipe: { id, title, image }
                                    })}>
                                </i>
                                <p>{ingredient.name}</p>
                            </div>
                            
                        </li>
                    )
                }
            </ul>
        </div>
    );
}
 
export default RecipeIngredients;