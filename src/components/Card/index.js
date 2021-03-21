import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  // root: {
  //   maxHeight: 800,
  //   maxWidth: 600,
  //   padding: 10,
  // },
});

export default function SimpleCard({ children }) {

  const classes = useStyles();

  return (
    <Card>
      {children}
    </Card>
  );
}