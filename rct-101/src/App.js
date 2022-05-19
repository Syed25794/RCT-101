import './App.css';
import { Todo } from './Sprint 1/Day 2/Assignments/Problem 2/Todo';


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
   <div className='container'>
   <Todo/>
   </div>
 )

}

export default App;
