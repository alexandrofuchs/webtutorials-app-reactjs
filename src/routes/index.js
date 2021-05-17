import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import AdminRoutes from './AdminRoutes';
import LoadingPage from '../pages/LoadingPage';
import { useAuthenticate } from '../contexts/UserContext';
import { useApp } from '../contexts/AppContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Routes() {
    const { signed, isUserAdmin } = useAuthenticate();
    const { loading } = useApp();

    if (loading) {
        return <LoadingPage />
    }
    return (
        <BrowserRouter>
            <Header title="Web Tutorials App" />
            <div className="Main">
                {signed ? (isUserAdmin ? <AdminRoutes /> : <ProtectedRoutes />) : <PublicRoutes />}
            </div>
            {/* <Footer description={"alexandrofuchs"} /> */}
        </BrowserRouter>
    )
}

