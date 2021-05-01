import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import LoadingPage from '../pages/LoadingPage';
import { useAuthenticate } from '../contexts/UserContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Routes() {
    const { signed, loading } = useAuthenticate();

    if (loading) {
        return <LoadingPage />
    }
    return (
        <>
            <BrowserRouter>
                <Header title="Web Tutorials App" />
                <div className="Main">
                    {signed ? <ProtectedRoutes /> : <PublicRoutes />}
                </div>                               
                <Footer description={"alexandrofuchs"} />
            </BrowserRouter>
        </>

    )
}

