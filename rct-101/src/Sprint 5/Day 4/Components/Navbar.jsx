import React from 'react'
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    const ActiveStyle={
        color:"blue"
    }
    const Style={
        color:"black"
    }

  return (
    <div>
    <NavLink style={({isActive})=>isActive? ActiveStyle : Style } to='/'>
    Home
    </NavLink>
    <NavLink style={({isActive})=>isActive? ActiveStyle : Style } to="/about">About</NavLink>
    <NavLink style={({isActive})=>isActive? ActiveStyle : Style }h to="/users">Users</NavLink>
    </div>
  )
}
