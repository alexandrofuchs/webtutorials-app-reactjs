import { Switch, Route, Redirect} from 'react-router-dom';
import React from 'react';
import SignInPage from '../../pages/SignInPage';
import SignUpPage from '../../pages/SignUpPage';
import HomePage from '../../pages/HomePage';

export default function PublicRoutes() {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/signin' component={SignInPage} />
            <Route path='/signup' component={SignUpPage} />
            <Redirect to={{ pathname: '/signin' }} />
        </Switch>
    )
}