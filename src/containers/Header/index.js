import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import {
  Toolbar,
  Button,
  Typography,
  Avatar,
  Divider,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useAuthenticate } from '../../contexts/UserContext';

export default function Header(props) {
  const classes = styles();
  const { categories, title } = props;
  const { signed, loading } = useAuthenticate();

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
        {categories.map((categorie) => (
          <Link
            color="inherit"
            noWrap
            key={categorie.id}
            variant="body2"
            to={categorie.url}
            className={classes.toolbarLink}
          >
            {categorie.description}
          </Link>
        ))}
      </Toolbar>
      <Divider />
    </div>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};