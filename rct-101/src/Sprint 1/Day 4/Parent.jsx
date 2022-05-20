import React from 'react'
import { Child1 } from './Child1'
import { Child2 } from './Child2'

export const Parent = () => {
    const [info,setInfo]=React.useState("");
    const passInfo=(value)=>{
        
    }
  return (
    <div>
    Parent:{info}
    <Child1 info={info} setInfo={setInfo}  passInfo={passInfo}/>
    <Child2 info={info} setInfo={setInfo} passInfo={passInfo} />
    </div>
  )
}
