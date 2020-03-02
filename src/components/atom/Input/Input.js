import React from 'react';
import PropTypes from 'prop-types';


const Input = ({ secondary, tertiary, ...props}) => {
    return (
        <>
        <input type="text" {...props}/>
        </>
    );
};

Input.propTypes = {

};

export default Input;