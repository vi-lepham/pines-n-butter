import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './SuggestionsList.scss'

const SuggestionsList = ({ suggestions, getAutoComplete }) => {
    const filteredSuggestions = suggestions.splice(0, 7);
    return (
        <div className="suggestions-list">
        {
            filteredSuggestions.map(suggestion => 
                <div className="suggestion" key={uuidv4()} onClick={e => getAutoComplete(e.target.textContent)}>
                    {suggestion}
                </div>
            )
        }
        </div>
    );
}
 
export default SuggestionsList;