import React, { useEffect, useState } from 'react';
import {
  Button,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Api from '../../../services/api';

export default function CategoriesMenu() {
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
        const res = await Api.get('/categories');
        if (res.data) {
            console.log(res.data)
            setCategories(res.data.data);          
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
  