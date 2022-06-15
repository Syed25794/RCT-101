import React,{createContext, useReducer} from 'react';
import Reducer from '../Reducer';

export const AppContext=createContext();

export default function AppContextWrapper({children}){
    const [state,dispatch]=useReducer(Reducer,{
        isAuth:false,
        token:"ABCD"
    });
    // const [state,setState]=useState({
    //     isAuth:false,
    //     token:"ABCD"
    // });

    // const handleLogin=(token)=>{
    //     console.log(token);
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
    //         token:"ABCD"
    //     });
    // }

    return(
        <AppContext.Provider value={[state,dispatch]}>
        {children}
        </AppContext.Provider>
    )
}