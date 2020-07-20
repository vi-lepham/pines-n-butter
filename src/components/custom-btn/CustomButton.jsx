import React from 'react';

import './CustomButton.scss';

const CustomButton = ({children, ...otherProps}) => (
    <button className='custom-btn' {...otherProps}>
        {children}
    </button>
)
 
export default CustomButton;