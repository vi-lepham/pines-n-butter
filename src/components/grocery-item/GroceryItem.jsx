import React, { useContext } from 'react';

import AppContext from '../../context/app.context';

import './GroceryItem.scss';

const GroceryItem = ({ item }) => {
    const { id, name, recipe } = item;
    const { removeGroceryItem } = useContext(AppContext);

    return (
        <div className="grocery-item">
            <div className="content">
                <div className="item">{name}</div>
                <div className="for-recipe">
                    <span>for</span>
                    <div className="recipe-thumbnail">
                        <img src={recipe.image} loading="lazy" alt="Recipe Thumbnail"/>
                    </div>
                    <div className="recipe-title">{recipe.title}</div>
                </div>
            </div>
            <div className="remove-button" onClick={() => removeGroceryItem(id)}>
                <i class="fa fa-minus-circle"></i>
            </div>
        </div>
    );
}
 
export default GroceryItem;