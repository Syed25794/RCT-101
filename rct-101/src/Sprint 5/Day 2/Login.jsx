import React,{useContext} from 'react'
import { AppContext } from './Context/AppContext'

export const Login = () => {
    const [state,dispatch]=useContext(AppContext);
    const handleToggle=()=>{
        if(!state.isAuth){
            dispatch({
                type:"HANDLE_LOGIN",
                payload:{
                    token:"NEW TOKEN"
                }
            });
        }else{
            dispatch({
                type:"HANDLE_LOGOUT"
            });
        }
    }
  return (
    <div>
    <button onClick={handleToggle}>{state.isAuth?"LogOut":"LogIn"}</button>
    </div>
  )
}
