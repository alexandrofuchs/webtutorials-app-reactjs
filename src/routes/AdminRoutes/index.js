import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CategoriesEditPage from '../../pages/CategoriesEditPage';
import SectionsEditPage from '../../pages/SectionsEditPage';
import UploadPage from '../../pages/VideoUploadPage';
import VideosPage from '../../pages/VideosPage';

import ProtectedRoutes from '../ProtectedRoutes';

export default function AdminRoutes() {
    return (
        <Switch>
            <Route path="/categories" component={CategoriesEditPage} />
            <Route path="/category/:id/sections" component={SectionsEditPage} />
            <Route path="/section/:id/videos" component={VideosPage} />
            <Route path="/section/:id/video/upload" component={UploadPage} />
            <Route path="*" component={ProtectedRoutes} />            
        </Switch>
    )
}
