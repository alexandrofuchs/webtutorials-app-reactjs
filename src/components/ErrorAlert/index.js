import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function ErrorAlert({ message }){
    return(
        <div className="erroralert">    
            <span className="errortext">{message ?? null}</span>
        </div>
    )
}

ErrorAlert.propTypes = {
    message: PropTypes.string.isRequired
}