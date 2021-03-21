import { Route } from 'react-router-dom';
import React from 'react';
import HomePage from '../../pages/HomePage';
import CoursePage from '../../pages/CoursePage';
import NotFoundPage from '../../pages/NotFoundPage';

export default function CommonRoutes() {
    return (
        <>
            <Route exact path='/' component={HomePage} />
            <Route path='/course/id' component={CoursePage} />
            <Route path="*" component={NotFoundPage} />
        </>
    )
}