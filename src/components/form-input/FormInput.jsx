import React from 'react';

const FormInput = ({handleChange, handleSubmit, ...otherProps}) => {
    return (
        <div className='form-input'>
            <form onSubmit={handleSubmit} autoComplete="off">
                <input 
                style={{
                    outline: 'none',
                    borderRadius: '10px',
                    fontFamily: 'inherit',
                    padding: '0 1%',
                    border: '#c9c9c9 solid 0.5px',
                    boxShadow: '5px 5px 7px rgba(100,100,100,0.2)'
                }}
                onChange={handleChange} 
                {...otherProps} 
                />
            </form>
        </div>
    )
}

export default FormInput;