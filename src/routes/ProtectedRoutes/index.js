import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserPage from '../../pages/UserPage';

import CommonRoutes from '../CommonRoutes';

export default function ProtectedRoutes() {
    return (
        <Switch>
            <Route path="/user/:id/config" component={UserPage} />    
            <Route path="*" component={CommonRoutes} />            
        </Switch>
    )
}