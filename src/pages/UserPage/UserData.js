import React, { useState, useEffect} from 'react';
import { ListItem, ListItemText, Button} from '@material-ui/core';
import './styles.css';
import PropTypes from 'prop-types';
import Api from '../../services/api';
import ErrorAlert from '../../components/ErrorAlert';
import RequiredTextField from '../../components/TextFields/RequiredTextField';
import { useAuthenticate } from '../../contexts/UserContext';

export default function UserData({ user, setUser }) {
    const [edit, setEdit] = useState(false);
    const [firstName, setFirstName] = useState(user.FirstName);        
    const [lastName, setLastName] = useState(user.LastName);
    const [email, setEmail] = useState(user.Email);

     const [error, setError] = useState(null);

     const { authenticatedUser } = useAuthenticate()

    const handleEdit = () => {
        setEdit(!edit);
    }

    const onClickSave = async () => {
        const res = await Api.patch(`/user/${user.Id}`, {
            FirstName: firstName,
            LastName: lastName,
            Email: email
        })
        console.log(res);
        if(res.error){
            console.log(res.error)
            setError(res.error)
        }else{
            handleEdit()
            setUser(authenticatedUser)
        }        
    }

    useEffect(()=>{
    },[firstName, lastName,email])

    return (
        <div className="root-UserData">
            <ListItem className="listItem-UserData">
                {
                    edit ?
                        <form className="form-UserData" noValidate autoComplete="off">
                            <ErrorAlert message={error}/>
                            <RequiredTextField
                                id={"fistName"}
                                label={"Nome"}
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                                onClick={() => { }}
                            />
                            <RequiredTextField
                                id={"lastName"}
                                label={"Sobrenome"}
                                value={user.LastName}
                                onChange={(event) => setLastName(event.target.value)}
                                onClick={() => { }}
                            />
                            <RequiredTextField
                                id={"email"}
                                label={"Email"}
                                value={user.Email}
                                onChange={(event) => setEmail(event.target.value)}
                                onClick={() => { }}
                            />               
                        </form> :
                        <>
                            <ListItemText className="listItemText-UserData" primary={"Nome: "} secondary={user.FirstName} />                     
                            <ListItemText className="listItemText-UserData" primary={"Sobrenome: "} secondary={user.LastName} />              
                            <ListItemText className="listItemText-UserData" primary={"Email: "} secondary={user.Email} />
                        </>
                }
            </ListItem>
            {
                edit ? <Button variant="contained" onClick={onClickSave}>Salvar</Button> : <Button variant="contained" onClick={handleEdit}>Editar</Button>
            }

        </div>
    )
}

UserData.propTypes = {
    user: PropTypes.object.isRequired
}