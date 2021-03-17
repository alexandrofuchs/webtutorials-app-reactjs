import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthenticateContext = createContext({
    signed: false,
    loading: false,
});

export default function AuthenticateProvider({ children }) {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        //setLoading(true);        
        setLoading(false);                      
    }, [])

    const logout = () => {

    }

    return (
        <AuthenticateContext.Provider value={{ signed: false, loading }}>
            {children}
        </AuthenticateContext.Provider>
    )
}

export const useAuthenticate = () => {
    const context = useContext(AuthenticateContext);
    return context;
}