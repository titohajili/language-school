"use client"
import React from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'
import { useState } from 'react'

const ResponsiveNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const opehnHandler = () => setIsOpen(!isOpen);
  const closeHandler = () => setIsOpen(false);
  return (
    <div>
      <Nav openNav={opehnHandler}/>
      <MobileNav isOpen={isOpen} closeNav={closeHandler} />
      
    </div>
  )
}

export default ResponsiveNav
