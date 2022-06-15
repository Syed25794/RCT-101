import React, { useReducer } from 'react';
import { createContext } from 'react';
import Reducer from '../Reducer';

export const AppContext=createContext();

export default function AppContextProviderWrapper({children}){

    const [state,dispatch]=useReducer(Reducer,{
        isAuth:false,
        token:"ABCD"
    });
    // const [state,setState]=useState({
    //     isAuth:false,
    //     token:"ABCD"
    // });

    // const handleLogin=(token)=>{
    //     setState({
    //         ...state,
    //         isAuth:true,
    //         token:token
    //     });
    // }
    // const handleLogOut=()=>{
    //     setState({
    //         ...state,
    //         isAuth:false,
    //         token:null
    //     });
    // }

    return (
        <AppContext.Provider value={[state,dispatch]}>
        {children}
        </AppContext.Provider>
    )
}