// import { useContext } from "react";
// import { AppProvider } from "./Sprint 6/Context API/Context/AppProvider";
// import {Timer} from './Sprint 2/Day 2/Problem/Timer';
import {StopWatchTimer} from './Sprint 2/Day 3/Problem 1/StopWatchTimer';


function App() {
  // const [state,{handleLogin,handleLogOut}]=useContext(AppProvider);
  // const handleToggle=()=>{
  //   if(state.isAuth){
  //     handleLogOut();
  //   }else{
  //     handleLogin("updated"+Date.now());
  //   }
  // }
  // return (
  //   <div>
  //   <h1>User Auth Status : {state.isAuth ? "True" :"False"}</h1>
  //   <h1>Token : {state.token}</h1>
  //   <button onClick={handleToggle}>{state.isAuth? "LogOut" :"Login"}</button>
  //   <Timer/>
    // </div>
    return (
      <div>
      <StopWatchTimer />
      </div>
    )
}

export default App;
