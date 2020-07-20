import React, { useContext } from 'react';

import AppContext from '../../context/app.context';

import './RecipeIngredients.scss';

const RecipeIngredients = ({ extendedIngredients, recipe }) => {
    const { title, image } = recipe;
    const { addGroceryItem } = useContext(AppContext);

    return (
        <ul className="ingredients-area">
            {
                extendedIngredients.map(
                    ingredient => 
                    <li key={ingredient.id}>
                        <i 
                            className="fa fa-plus-circle" 
                            onClick={() => addGroceryItem({ 
                                id: ingredient.id, 
                                name: ingredient.name, 
                                recipe: { title, image }
                            })}>
                        </i>
                        <h6>{ingredient.name}</h6>
                        <p>{ingredient.original}</p>
                    </li>
                )
            }
        </ul>
    );
}
 
export default RecipeIngredients;