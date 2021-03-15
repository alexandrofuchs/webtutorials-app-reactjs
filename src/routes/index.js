import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import LoadingPage from '../pages/LoadingPage';
import { useAuthenticate } from '../contexts/UserContext';

export default function Routes() {
    const { signed, loading } = useAuthenticate();
    if (loading) {
        return <LoadingPage />
    }
    return (
        <BrowserRouter>
            {signed ? <ProtectedRoutes /> : <PublicRoutes />}
        </BrowserRouter>
    )
}

