import React,{useState} from 'react';
import { createContext } from 'react';

export const AppContext=createContext();

export default function AppContextProviderWrapper({children}){

    const [state,setState]=useState({
        isAuth:false,
        token:"ABCD"
    });

    const handleLogin=(token)=>{
        setState({
            ...state,
            isAuth:true,
            token:token
        });
    }
    const handleLogOut=()=>{
        setState({
            ...state,
            isAuth:false,
            token:null
        });
    }

    return (
        <AppContext.Provider value={[state,[handleLogOut,handleLogin]]}>
        {children}
        </AppContext.Provider>
    )
}