import React from 'react'
import { ContactUs } from './ContactUs'
import { Download } from './Download'
import { Help } from './Help'
import { Home } from './Home'
import { JoinUs } from './JoinUs'
import { Login } from './Login'
import { Search } from './Search'
import { Settings } from './Settings'

export const JoinAll = () => {
  return (
    <div>
    <div id='flex'>
    <JoinUs/>
    <Settings/>
    </div>
    <div id='flex'>
    <Login/>
    <ContactUs/>
    </div>
    <div id='flex'>
    <Search/>
    <Help/>
    </div>
    <div id='flex'>
    <Home/>
    <Download/>
    </div>
    </div>
  )
}
