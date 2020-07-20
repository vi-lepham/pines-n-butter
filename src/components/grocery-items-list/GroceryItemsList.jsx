import React from 'react';

import GroceryItem from '../../components/grocery-item/GroceryItem';

const GroceryItemsList = ({ groceryItems }) => (
    <div className="grocery-items-list">
        {
            groceryItems.map(item => 
            <GroceryItem key={item.id} item={item} />)
        }
    </div>
)
 
export default GroceryItemsList;