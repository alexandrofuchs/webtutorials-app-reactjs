import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CommonRoutes from '../CommonRoutes';
import SignInPage from '../../pages/SignInPage';
import SignUpPage from '../../pages/SignUpPage';


export default function PublicRoutes() {
    return (
        <Switch>
            <Route path='/signin' component={SignInPage} />
            <Route path='/signup' component={SignUpPage} />
            <Route path='*' component={CommonRoutes} />
        </Switch>
    )
}