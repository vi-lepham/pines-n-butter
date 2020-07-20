import React, { useContext } from 'react';

import AppContext from '../../context/app.context';
import { ReactComponent as KitchenLogo } from '../../assets/kitchen.svg';

import AddToPantry from '../../components/add-to-pantry/AddToPantry';
import Pantry from '../../components/pantry/Pantry';

import './PantryPage.scss';

const PantryPage = () => {
    const { ingredients } = useContext(AppContext);

    return (
        <div className='pantry-page'>
            <AddToPantry />
            {
                ingredients.length ?
                (
                    <Pantry />
                ) : (
                    <div className="empty-pantry">
                        <div className="empty-message">
                            <span>Your pantry is empty! </span>
                            <br />
                            Add ingredients to search for recipes.
                            <br />
                            The more ingredients you add, the more specific the results will be.
                        </div>
                        <KitchenLogo className='kitchen-logo' />
                    </div>
                )
            }
        </div>
    );
}
    
  
export default PantryPage;