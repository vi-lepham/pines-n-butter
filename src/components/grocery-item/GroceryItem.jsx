import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import LocalDataContext from '../../context/local-data/LocalDataContext';

import './GroceryItem.scss';

const GroceryItem = ({ item, history }) => {
    const { id, name, recipe } = item;
    const { removeGroceryItem } = useContext(LocalDataContext);

    return (
        <div className="grocery-item">
            <div className="content">
                <div className="item">{name}</div>
                <div className="remove-button" onClick={() => removeGroceryItem(id)}>
                    <i className="fa fa-minus-circle"></i>
                </div>
            </div>
            <div className="for-recipe" onClick={() => history.push(`/recipe/${recipe.id}`)}>
                <span>For:</span>
                <div className="recipe">
                    <div className="recipe-thumbnail">
                        <img src={recipe.image} loading="lazy" alt="Recipe Thumbnail"/>
                    </div>
                    <div className="recipe-title">{recipe.title}</div>
                </div>
            </div>
        </div>
    );
}
 
export default withRouter(GroceryItem);