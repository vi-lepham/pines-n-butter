import React, { useContext } from 'react';

import AppContext from '../../context/app.context';

import PantryItemsList from '../pantry-items-list/PantryItemsList';
import CustomButton from '../custom-btn/CustomButton';
import RecipesList from '../recipes-list/RecipesList';
import Spinner from '../spinner/Spinner';

import './Pantry.scss';

const Pantry = () => {

    const { ingredients, recipes, isLoading, getRecipes } = useContext(AppContext);

    const ingredientName = ingredients.map(item => item.name); 
    const jointIngredientQuery = ingredientName.join(' ');
    
    return (
        <div className="pantry">
            <PantryItemsList ingredients={ingredients} />

            <CustomButton 
                className='custom-btn' 
                onClick={() => getRecipes(jointIngredientQuery)} 
            >
                Get Recipes
            </CustomButton>

            {
                isLoading ? <Spinner /> : <RecipesList recipes={recipes} />
            }
        </div>
    );
}
 
export default Pantry;