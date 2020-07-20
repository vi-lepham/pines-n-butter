import React from 'react';

import PantryItem from '../pantry-item/PantryItem';

import './PantryItemsList.scss';

const PantryItemsList = ({ ingredients }) => (
    <div className="pantry-items-list">
        {
            ingredients.map(item => 
                <PantryItem key={item.id} item={item} />)
        }
    </div>
)

export default PantryItemsList;