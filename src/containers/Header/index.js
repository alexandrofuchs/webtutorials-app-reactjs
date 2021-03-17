import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { useAuthenticate } from '../../contexts/UserContext';

export default function Header(props) {
  const classes = styles();
  const { sections, title } = props;
  const { signed, loading } = useAuthenticate();

  return (
    <React.Fragment>
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
              <Button variant="outlined" size="small" >
                Logout
              </Button>
              <Avatar>A</Avatar>
            </div>
            :
            <div>
              <Link to="/signin">Sign In</Link>
              |
              <Link to="/signup">Sign Up</Link>
            </div>
        }
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};