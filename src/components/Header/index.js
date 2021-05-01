import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import {
  Toolbar,
  Button,
  Typography,
  Divider,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useAuthenticate } from '../../contexts/UserContext';
import CategoriesMenu from './CategoriesMenu';
import UserMenu from './UserMenu';

export default function Header(props) {

  const { title } = props;
  const { signed } = useAuthenticate();

  return (
    <div className="Header">
      <Toolbar className={"toolbar-Header"}>
        <Button><Link to="/">Inicio</Link></Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={"toolbarTitle-Header"}
        >
          {title}
        </Typography>
        {
          signed ?
            <div>
              <UserMenu />
            </div>
            :
            <div>
              <Button><Link to="/signin">Sign In</Link></Button>
              |
              <Button><Link to="/signup">Sign Up</Link></Button>
            </div>
        }
      </Toolbar>
      <Divider />
      <Toolbar component="nav" variant="dense" className={"toolbarSecondary-Header"}>
        <CategoriesMenu />
      </Toolbar>
      <Divider />
    </div>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

