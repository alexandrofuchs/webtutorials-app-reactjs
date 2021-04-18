import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import LoadingPage from '../pages/LoadingPage';
import { useAuthenticate } from '../contexts/UserContext';
import Header from '../containers/Header';
import Footer from '../containers/Footer';

const categories = [
    { id: 0, description: 'Desenvolvimento', url: '#' },
    { id: 1, description: 'Banco de Dados', url: '#' },
    { id: 2, description: 'Ciência dos Dados', url: '#' },
    { id: 3, description: 'Inteligencia Artificial', url: '#' },
    { id: 4, description: 'Redes de computadores', url: '#' },
];

export default function Routes() {
    const { signed, loading } = useAuthenticate();

    if (loading) {
        return <LoadingPage />
    }
    return (
        <>           
            <BrowserRouter>
                <Header title="Web Streaming Application" categories={categories} />
                {signed ? <ProtectedRoutes /> : <PublicRoutes />}
                <Footer/>                
            </BrowserRouter>
        </>

    )
}

