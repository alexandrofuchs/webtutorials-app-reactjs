import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import {
  Toolbar,
  Button,
  Typography,
  Avatar,
  Divider,
  Menu,
  MenuItem
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useAuthenticate } from '../../contexts/UserContext';
import Api from '../../services/api';

export default function Header(props) {
  const classes = styles();
  const { title } = props;
  const { signed } = useAuthenticate();

  return (
    <div className="Header">
      <Toolbar className={classes.toolbar}>
        <Button><Link to="/">Inicio</Link></Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        {
          signed ?
            <div>
              <Button size="small">Subscribe</Button>
              <Button variant="outlined" size="small">
                Logout
              </Button>
              <Avatar>A</Avatar>
            </div>
            :
            <div>
              <Button><Link to="/signin">Sign In</Link></Button>
              |
              <Button><Link to="/signup">Sign Up</Link></Button>
            </div>
        }
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        <SimpleMenu />        
      </Toolbar>
      <Divider />
    </div>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await GetCategories();
      if (res.data) {
        if (res.data.categories) {
          setCategories(res.data.categories);
        }
      }
    }
    fetchData();
  }, [])

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Categorias
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {
          categories.map(cat => (
            <MenuItem key={cat.id} onClick={handleClose}><Link to={`/category/${cat.id}`}>{cat.description}</Link></MenuItem>
          ))
        }
      </Menu>
    </div>
  );
}

const GetCategories = async () => {
  return await Api.get('/category');
}