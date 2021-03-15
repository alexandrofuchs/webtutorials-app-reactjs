import React from 'react';
import HomePage from '../../pages/HomePage';
import NotFoundPage from '../../pages/NotFoundPage';
import { Switch, Route } from 'react-router-dom';

export default function ProtectedRoutes() {
    return (

        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path="*" component={NotFoundPage} />
        </Switch>

    )
}