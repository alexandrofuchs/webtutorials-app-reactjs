import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import HomePage from '../../pages/HomePage';
import CategoryPage from '../../pages/CategoryPage';
//import NotFoundPage from '../../pages/NotFoundPage';
import VideoPage from '../../pages/VideoPage';

export default function CommonRoutes() {

    return (
        <>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/category/:id' component={CategoryPage} />
            <Route exact path='/video/:id' component={VideoPage}/>
            {/* <Route path='*'>
                <Redirect to="/signin"/>
            </Route> */}
        </>
    )
}