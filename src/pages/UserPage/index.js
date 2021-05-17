import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Divider } from '@material-ui/core';
import './styles.css';
import { useAuthenticate } from '../../contexts/UserContext';
import {Link} from 'react-router-dom';
import UserData from './UserData';

export default function UserPage() {

    const { authenticatedUser } = useAuthenticate()

    const [user, setUser] = useState({
        Id: "",
        FirstName: "",        
        LastName: "",
        Email: "",
        CreatedAt: "",
        UpdatedAt: "",  
    });



    const MenuOptions = [
        {title:'Dados', url: '#'}, 
        {title:'Favoritos', url: '#'}, 
        {title:'Alterar Senha', url: '#'}, 
        {title:'Excluir Conta', url: '#'}, 
    ];

    useEffect(() => {
        setUser(authenticatedUser);
    },[authenticatedUser])

    return (

        <div className="root-UserPage">
            <h1>{`Olá, ${user.FirstName} `}</h1>            
            <div className="main-UserPage">
            <Divider/>
            <List>
                {MenuOptions.map(({title, url}) => (                    
                    <>
                        <Link to={url}>
                            <ListItem button key={title}>
                                <ListItemText primary={title} />
                            </ListItem>
                        </Link>                        
                        <Divider/>
                    </>                               
                ))}
            </List>              
                <UserData user={user} setUser={setUser}/>          
            </div>
            
        </div>
    )
}








