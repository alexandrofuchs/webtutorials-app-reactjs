import { Switch, Route, Redirect} from 'react-router-dom';
import React from 'react';
import SignInPage from '../../pages/SignInPage';
import SignUpPage from '../../pages/SignUpPage';

export default function PublicRoutes() {
    return (
        <Switch>
            <Route path='/signin' component={SignInPage} />
            <Route path='/signup' component={SignUpPage} />
            <Redirect to={{ pathname: '/signin' }} />
        </Switch>
    )
}