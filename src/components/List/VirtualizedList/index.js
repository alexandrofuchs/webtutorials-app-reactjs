import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './styles.css';

export default function PinnedSubheaderList({ dataList }) {

  return (
    <>
      <List className={"root-virtualizedList"}>
        <h1>Subsessões</h1>
        {dataList.map((section) => (
          <ListItem className={"listSection-virtualizedList"} key={section.id} button>
            <ListItemText className={'ul-virtualizedList'} id={section.description} primary={section.description} />
          </ListItem>
        ))}
      </List>
    </>
  );
}