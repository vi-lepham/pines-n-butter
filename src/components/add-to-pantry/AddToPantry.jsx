import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import LocalDataContext from '../../context/local-data/LocalDataContext';
import ApiDataContext from '../../context/api-data/ApiDataContext';

import FormInput from '../form-input/FormInput';
import SuggestionsList from '../suggestions-list/SuggestionsList';

import './AddToPantry.scss';

const AddToPantry = () => {
    const [newIngredient, setNewIngredient] = useState('')
    const [input, setInput] = useState('')
    const [display, setDisplay] = useState(true)
    const [error, setError] = useState(false)

    const { addIngredient } = useContext(LocalDataContext);
    const { suggestions, getSuggestions } = useContext(ApiDataContext);

    const getAutoComplete = suggestion => {

        // Add ingredient to pantry
        addIngredient({id: uuidv4(), name: suggestion});

        // Clear input and hide suggestion list
        setInput('')
        setDisplay(false)
    }

    const handleChange = e => {
        setNewIngredient({ id: uuidv4(), name: e.target.value })
        setInput(e.target.value)
        getSuggestions(e.target.value)
        
        if (!e.target.value) {

            // Hide suggestion list if input is back to empty
            setDisplay(false)
        } else {
            setDisplay(true)
            setNewIngredient({ id: uuidv4(), name: e.target.value })
            setInput(e.target.value)
            getSuggestions(e.target.value)
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (newIngredient) {

            // Add ingredient to pantry if not null
            addIngredient(newIngredient)
        } else {
            
            // Show error in 3s
            setError(true)
            setTimeout(() => setError(false), 3000)
        }
        
        // Clear input and hide suggestion list
        setInput('')
        setDisplay(false)
    }

    return (
        <div className="add-to-pantry">
            { error && <div className='error-message'>Please input something</div>}
            <FormInput 
                className='pantry-input'
                name='ingredient'
                type='text'
                value={input}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                placeholder='Add an item to your pantry!'
                tabindex="0"
            />
            {
                suggestions && display && <SuggestionsList suggestions={suggestions} getAutoComplete={getAutoComplete} />
            }
        </div> 
    );
}
 
export default AddToPantry;