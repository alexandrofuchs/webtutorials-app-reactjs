import React from 'react';
import { Button } from '@material-ui/core';
import UseStyles from './styles';

export default function DefaultButton() {

    const classes = UseStyles();

    return (
        <Button className={classes.button} >
            Enviar
        </Button>
    )
}

