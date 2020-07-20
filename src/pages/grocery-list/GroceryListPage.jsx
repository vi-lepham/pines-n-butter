import React, { useContext } from 'react';

import AppContext from '../../context/app.context';

import { ReactComponent as GroceryLogo } from '../../assets/grocery.svg';
import GroceryItem from '../../components/grocery-item/GroceryItem';

import './GroceryListPage.scss';

const GroceryListPage = () => {
    const { groceryItems } = useContext(AppContext);

    return (
        <div className="grocery-list-page">
            {
                groceryItems.length ? (
                    groceryItems.map(item => 
                        <GroceryItem key={item.id} item={item} />)
                ) : (
                    <div className="empty-grocery-list">
                        <div className="empty-message">
                            <p><span>Your grocery list is empty.</span>
                                <br/>
                                Add missing ingredients here to finish your favorite recipes!
                            </p>
                        </div>
                        <GroceryLogo className='grocery-log'/>
                        
                    </div>
                )
            }
        </div>
    );
}
 
export default GroceryListPage;