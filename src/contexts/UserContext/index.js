import React, { createContext, useContext, useState, useEffect } from 'react';
import Api from '../../services/api';
import jwtDecode from 'jwt-decode';

const authenticate = async (username, password) => {
    try {
        return await Api.post('/authenticate', {
            email: username,
            password
        });
    } catch (err) {
        return err.message;
    }
}

const validateToken = async () => {
    try {
        return await Api.get('/validate-token');
    } catch (err) {
        return { 
            error: err.message, 
            data: null 
        };
    }
}

const AuthenticateContext = createContext({
    signed: false,
    signIn: null,
    signOut: null,
    loading: false,
    signInError: null,
    authenticatedUser: null,
});

export default function AuthenticateProvider({ children }) {

    const [loading, setLoading] = useState(true);
    const [signInError, setSignInError] = useState(null);
    const [authenticatedUser, setAuthenticatedUser] = useState(null);

    const signIn = async (username, password) => {
        setLoading(true);
        const res = await authenticate(username, password);
        console.log(res);
        if (res.error) {
            setSignInError(res.error);
            return setLoading(false);
        }

        Api.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
        let decoded = await jwtDecode(res.data.token);
        localStorage.setItem("$Authenticate:token", res.data.token);
        localStorage.setItem("$Authenticate:user", JSON.stringify(decoded));
        setAuthenticatedUser(decoded);
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        const validateStoragedToken = async () => {

            const token = await localStorage.getItem("$Authenticate:token");
            const user = await localStorage.getItem("$Authenticate:user");

            if (token && user) {
                Api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const res = await validateToken();
                if (res.error) {
                    signOut();
                    return;
                }                
                setAuthenticatedUser(JSON.parse(user));
            }
        }
        validateStoragedToken();
        setLoading(false);                      
    }, [])

    const signOut = () => {
        localStorage.clear();
        setAuthenticatedUser(null);
        window.location = '/';
    }

    return (
        <AuthenticateContext.Provider value={{ signed: !!authenticatedUser, authenticatedUser, signIn, signOut, loading, signInError }}>
            {children}
        </AuthenticateContext.Provider>
    )
}

export const useAuthenticate = () => {
    const context = useContext(AuthenticateContext);
    return context;
}