import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import HomePage from '../../pages/HomePage';
import CategoryPage from '../../pages/CategoryPage';
//import NotFoundPage from '../../pages/NotFoundPage';
import PostEditorPage from '../../pages/PostEditorPage';


export default function CommonRoutes() {

    return (
        <>
            <Route exact path='/' component={HomePage} />
            <Route path='/category/:id' component={CategoryPage} />
            <Route path='/post/:id/editor' component={PostEditorPage} />
            <Route path='*'>
                <Redirect to="/"/>
            </Route>
        </>
    )
}