import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext({
    loading: false,
    error: null,   
    setError: null,
    setLoading: null,
});

export default function AppProvider({ children }) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleError = (error) => setError(error)
    const clearError = () =>  setError(null);

    useEffect(()=>{
        if(!!loading){
            clearError()
        }
       
    },[loading])

    return (
        <AppContext.Provider value={{ loading, error , setError: handleError, setLoading: (value) => setLoading(value) }}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => {
    const context = useContext(AppContext);
    return context;
}