import React from 'react';
import { withRouter } from 'react-router-dom';

import FaveHeart from '../fave-heart/FaveHeart';

import './RecipeCard.scss';

const RecipeCard = ({ recipe, history }) => {
    const { id, title, image } = recipe;
     
    return (
        <div className='recipe-card'>
            <div 
                className="recipe-preview" 
                onClick={() => history.push(`/recipe/${id}`)}>

                <div className='thumbnail-img'>
                    <img src={image} loading="lazy" alt='Recipe thumbnail'/>
                </div>
                
                <div className="content">
                    <h2>{title}</h2>
                </div>
            </div>

            <FaveHeart className='fave-heart' recipe={recipe} />
        </div>
    )
}
 
export default withRouter(RecipeCard);