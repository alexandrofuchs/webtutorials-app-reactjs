import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import './styles.css';
export default function RequiredTextField({ id, autoComplete, label, autoFocus, onChange, error }) {
    return (
        <div className="RequiredTextField">
        <TextField
            variant="standard"
            margin="normal"
            type={id}
            required            
            id={id}
            name={id}
            autoComplete={autoComplete? autoComplete : id }
            label={label}
            onChange={onChange? onChange : () => {console.log("function onchange is not declared!")}}
            autoFocus={autoFocus ? autoFocus : false}            
        />
        {error ? <span className="ErrorMessage">{error}</span> : <div className="space" />}
        </div>

    )
}

RequiredTextField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    autoFocus: PropTypes.bool,
    onChange: PropTypes.func,
    autoComplete: PropTypes.string,
    error: PropTypes.string,
}
