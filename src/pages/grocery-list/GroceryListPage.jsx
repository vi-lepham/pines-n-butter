import React, { useContext } from 'react';

import AppContext from '../../context/app.context';

import { ReactComponent as GroceryLogo } from '../../assets/grocery.svg';
import GroceryItemsList from '../../components/grocery-items-list/GroceryItemsList';

import './GroceryListPage.scss';

const GroceryListPage = () => {
    const { groceryItems } = useContext(AppContext);

    return (
        <div className="grocery-list-page">
            <h1>Your Grocery List</h1>
            {
                groceryItems.length ? (
                    <GroceryItemsList groceryItems={groceryItems} />
                ) : (
                    <div className="empty-grocery-list">
                        <div className="empty-message">
                            <p><span>Your grocery list is empty.</span>
                                Add missing ingredients here to finish your favorite recipes!
                            </p>
                        </div>
                        <GroceryLogo className='grocery-logo'/>
                        
                    </div>
                )
            }
        </div>
    );
}
 
export default GroceryListPage;