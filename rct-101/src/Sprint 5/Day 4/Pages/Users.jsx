import React from 'react'

export const Users = () => {
    const users=[{id:1,name:"Syed"},
    {id:2,name:"Gul"},
    {id:3,name:"Mohammad"},
    {id:4,name:"Samad"}
]
  return (
    <div>
    {users.map(user=>{
        return(
            <>
            <div>id:{user.id}</div>
            <div>Name:{user.name}</div>
            </>
        )
    })}
    </div>
  )
}
