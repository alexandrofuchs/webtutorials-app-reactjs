import React from 'react';
import {
  Button,
  Avatar,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useAuthenticate } from '../../../contexts/UserContext';
import './styles.css';
export default function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { authenticatedUser, signOut } = useAuthenticate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onSignOut = () => {
    handleClose();
    signOut();
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <Avatar className="avatar-UserMenu">{authenticatedUser.FirstName[0]}</Avatar>
        {authenticatedUser.FirstName}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link to={`/user/${authenticatedUser.Id}/config`}>Configurações</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={"#"}>Favoritos</Link></MenuItem>
        <MenuItem onClick={onSignOut}>Sair</MenuItem>
      </Menu>
    </>
  );
}

