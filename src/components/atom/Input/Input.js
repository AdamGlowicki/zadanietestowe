import React from 'react';
import PropTypes from 'prop-types'

const Input = ({secondary, tertiary, ...props}) => (
    <input type="text" {...props}/>
)

Input.propTypes = {
    secondary: PropTypes.bool,
    tertiary: PropTypes.bool
};

Input.defaultProps = {
    secondary: false,
    tertiary: false
}

export default Input;