import React from 'react';
import PropTypes from 'prop-types';
import {
    List,
    ListItem,
    ListItemText
} from '@material-ui/core';

export default function DefaultList({ data }){
    return (
        <List>
            {data.map((text) => (
                <ListItem button key={text}>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    )
}

DefaultList.propTypes = {
    data: PropTypes.array.isRequired
}
