import React, { useContext } from 'react';

import LocalDataContext from '../../context/local-data/LocalDataContext';

import './PantryItem.scss';

const PantryItem = ({ item }) => {
    const { name, id } = item;
    const { removeIngredient } = useContext(LocalDataContext);

    return (
        <div className="pantry-item">
            <div className="content">{name}</div>
            <div className="remove-button" onClick={() => removeIngredient(id)}>
                <i className="fa fa-minus-circle"></i>
            </div>
        </div>
    );
}
 
export default PantryItem;