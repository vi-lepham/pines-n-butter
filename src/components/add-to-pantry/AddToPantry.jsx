import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppContext from '../../context/app.context';

import FormInput from '../form-input/FormInput';
import SuggestionsList from '../suggestions-list/SuggestionsList';

import './AddToPantry.scss';

const AddToPantry = () => {
    const [newIngredient, setNewIngredient] = useState('')
    const [input, setInput] = useState('')
    const [display, setDisplay] = useState(true)
    const { addIngredient, getSuggestions, suggestions } = useContext(AppContext);

    const getAutoComplete = suggestion => {
        setInput(suggestion)
        setNewIngredient({ id: uuidv4(), name: suggestion })
    }

    const handleChange = e => {
        setNewIngredient({ id: uuidv4(), name: e.target.value })
        setInput(e.target.value)
        getSuggestions(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (newIngredient.id) {
            addIngredient(newIngredient)
        }
        setInput('')
        setDisplay(false)
    }

    return (
        <div className="add-to-pantry">
            <FormInput 
                className='pantry-input'
                name='ingredient'
                type='text'
                value={input}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                placeholder='Add an item to your pantry!'
            />
            {
                suggestions && display && <SuggestionsList suggestions={suggestions} getAutoComplete={getAutoComplete} />
            }
        </div> 
    );
}
 
export default AddToPantry;