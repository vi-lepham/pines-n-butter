import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import ApiDataContext from '../../context/api-data/ApiDataContext';

import RecipeDetails from '../../components/recipe-details/RecipeDetails';
import Spinner from '../../components/spinner/Spinner'; 

const RecipeDetailsPage = ({ match }) => {
    
    const { recipe, getRecipeDetails } = useContext(ApiDataContext);

    useEffect(() => {
        getRecipeDetails(match.params.recipeId)
    }, [match.params.recipeId])

    return (
        <div className="recipe-details-page">
            {
                recipe ? <RecipeDetails recipe={recipe} /> : <Spinner />
            }
        </div>
    );
}
 
export default withRouter(RecipeDetailsPage);
