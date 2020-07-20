import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './RecipeInstructions.scss';

const RecipeInstructions = ({ analyzedInstructions }) => {
    const instructionSteps = analyzedInstructions.map(data => data.steps);
    return (
        <div className="recipe-instructions">
            <h2>Instructions</h2>
            {
                instructionSteps.length ?
                (
                    <ul className="instructions">
                        {
                            instructionSteps.map(stepData =>
                                stepData.map(step =>
                                    <li key={uuidv4()}>
                                        <span>{step.number}</span>
                                        <p>{step.step}</p>
                                    </li>
                                ) 
                            )
                        }
                    </ul>
                ) : (
                    <div className="empty-message">
                        No detailed instructions yet.
                    </div>
                )
            }
        </div>
        
    );
}
 
export default RecipeInstructions;