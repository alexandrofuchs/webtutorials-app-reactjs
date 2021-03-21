import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import {
  Toolbar,
  Button,
  Typography,
  Avatar,
  Link
} from '@material-ui/core';
import { Link as RouteLink } from 'react-router-dom';
import { useAuthenticate } from '../../contexts/UserContext';



export default function Header(props) {
  const classes = styles();
  const { sections, title } = props;
  const { signed, loading } = useAuthenticate();

  return (
      <div className="Header">
      <Toolbar className={classes.toolbar}>
        <Button size="small">Subscribe</Button>
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
              <Button variant="outlined" size="small">
                Logout
              </Button>
              <Avatar>A</Avatar>
            </div>
            :
            <div>
              <Button href="/signin">Sign In</Button>
              |
              <Button href="/signup">Sign Up</Button>
            </div>
        }
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </div>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};