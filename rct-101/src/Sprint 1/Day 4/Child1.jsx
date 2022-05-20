import React from 'react'

export const Child1 = (props) => {
    const [value,setValue]=React.useState("");

  return (
    <div>
    <input onChange={e=>{props.setInfo(e.target.value); setValue(e.target.value)}} type="text" />
    <button onClick={()=>props.passInfo(value)} >Pass from Child 1 to Child 2</button>
    Child1 : {props.info}
    </div>
  )
}
