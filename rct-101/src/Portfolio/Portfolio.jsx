import React from 'react'
import { About } from './About/About'
import { Contact } from './Contact/Contact'
import { Navbar } from './Navbar/Navbar'
import { Projects } from './Projects/Projects'
import { Skills } from './Skills/Skills'

export const Portfolio = () => {
  return (
    <div>
    <Navbar/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
  )
}
