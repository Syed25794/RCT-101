import { createContext, useReducer } from "react";
import Reducer from "../Reducer";

export const UserContext=createContext();

export default function UserContextProviderWrapper({children}){
    const [state,dispatch]=useReducer(Reducer,{
        isAuth:false,
        token:"ABCD"
    });
   
    return (
        <UserContext.Provider value={[state,dispatch]}>
        {children}
        </UserContext.Provider>
    )
}