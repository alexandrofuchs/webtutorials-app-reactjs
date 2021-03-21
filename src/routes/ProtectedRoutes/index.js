import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CommonRoutes from '../CommonRoutes';

export default function ProtectedRoutes() {
    return (
        <Switch>
            <Route path="*" component={CommonRoutes} />
        </Switch>
    )
}