import React, { useState } from 'react';
import { ListItem, ListItemText, Input, Button} from '@material-ui/core';
import './styles.css';
import PropTypes from 'prop-types';

export default function UserData({ user }) {
    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit(!edit);
    }
    return (
        <div className="root-UserData">

            <ListItem className="listItem-UserData">
                {
                    edit ?
                        <form className="form-UserData" noValidate autoComplete="off">
                            <ListItemText className="listItemText-UserData" primary={"Nome: "} />
                            <Input value={user.FirstName} disabled={!edit} />
                            <ListItemText className="listItemText-UserData" primary={"Sobrenome: "} />
                            <Input value={user.LastName} disabled={!edit} />
                            <ListItemText className="listItemText-UserData" primary={"Email: "} />
                            <Input value={user.Email} disabled={!edit} />                            
                        </form> :
                        <>
                            <ListItemText className="listItemText-UserData" primary={"Nome: "} secondary={user.FirstName} />                     
                            <ListItemText className="listItemText-UserData" primary={"Sobrenome: "} secondary={user.LastName} />              
                            <ListItemText className="listItemText-UserData" primary={"Email: "} secondary={user.Email} />
                        </>
                }
            </ListItem>
            {
                edit ? <Button variant="contained" onClick={handleEdit}>Salvar</Button> : <Button variant="contained" onClick={handleEdit}>Editar</Button>
            }

        </div>
    )
}

UserData.propTypes = {
    user: PropTypes.object.isRequired
}