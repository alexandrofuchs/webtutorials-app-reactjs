import React from 'react';
import Card from '@material-ui/core/Card';

export default function SimpleCard({ children }) {

    return (
    <Card>
      {children}
    </Card>
  );
}