import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './RecipeInstructions.scss';

const RecipeInstructions = ({ analyzedInstructions }) => {
    const instructionSteps = analyzedInstructions.map(data => data.steps);

    return (
        <ul className="intructions-area">
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
    );
}
 
export default RecipeInstructions;