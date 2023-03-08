import React, { useState, createContext } from 'react';

//making instance of context
export const AppProvider=createContext();

//Children needs to be

export default function AppProviderWrapper({children}){
    const [state,setState]=useState({
        isAuth:false,
        token:"ABCD"
    });
    const handleLogin=(token)=>{
        setState({
            ...state,
            isAuth:true,
            token:token
        })
    }
    const handleLogOut=()=>{
        setState({
            ...state,
            isAuth:false,
            token:"ABCD"
        })
    }

    return(
        <AppProvider.Provider value={[state,{handleLogin,handleLogOut}]}>
        {children}
        </AppProvider.Provider>
    )
}