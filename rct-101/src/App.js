import './App.css';
// import { Parent } from './Sprint 1/Day 4/Parent';
// import { Todo } from './Sprint 1/Day 2/Assignments/Problem 2/Todo';
// import { Card } from './Sprint 1/Day 3/Assignments/Problem 3/Card';
import { TodoApp } from './Sprint 1/Day 4/Assignments/Problem 1/TodoApp';


function App() {

  // const [count,setCount]=useState(0);

  // const handleInc=(value)=>{
  //   setCount(value+1);
  // }
  // const handleDec=(value)=>{
  //   if( value === 0 ){
  //     setCount(0);
  //   }else{
  //     setCount(value-1);
  //   }
  // }
  // const handleDouble=(value)=>{
  //   setCount(value*2);
  // }

  // return (
  //   <div style={{width:"400px", height:"210px", margin:"auto",borderRadius:"20px" ,border:"3px solid green" ,textAlign:"center",marginTop:"20px"  }}>
  //   <Counter count={count}  handleInc={handleInc} handleDec={handleDec} handleDouble={handleDouble}/>
  //   </div>
  // );

 return(
   <>
   <TodoApp/>
   </>
 )

}

export default App;
