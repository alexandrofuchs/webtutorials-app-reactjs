import React, { useState } from 'react';
import useStyles from './styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Checkbox from '@material-ui/core/Checkbox';

const Moduleclasses = [
  { id: 0, moduleId: 0, description: "Aula 1", level: 1 },
  { id: 1, moduleId: 0, description: "Aula 2", level: 2 },
  { id: 2, moduleId: 0, description: "Aula 3", level: 3 }
]

const modules = [
  { id: 0, description: "Modulo 1", level: 1, classes: Moduleclasses },
  { id: 1, description: "Modulo 2", level: 2, classes: Moduleclasses },
  { id: 2, description: "Modulo 3", level: 3, classes: Moduleclasses }
]

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [checked, setChecked] = useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleClick = () => {
    setOpen(!open)
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Módulos
        </ListSubheader>
      }
      className={classes.root}
    >
      {modules.map(module => (
        <>
          <ListItem button onClick={handleClick}>
            <ListItemText primary={module.description} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          {
            module.classes.map(videoClass => {
              const labelId = `checkbox-list-secondary-label-${videoClass.id}`;
              return(
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary={videoClass.description} />
                      <ListItemSecondaryAction>
                        <Checkbox
                          edge="end"
                          onChange={handleToggle(videoClass.id)}
                          checked={checked.indexOf(videoClass.id) !== -1}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </Collapse>
              )
            })
          }

        </>))}
    </List>
  );
}