import React from 'react'
import Navbar from './Navbar'
import Home from '../Home'
import {useState} from "react"
const Index = () => {
    const [header,setHeader]=useState("Home")
  return (
    <div className=' w-full h-full' >
        <Navbar   setHeader={setHeader}/>
        <Home header={header}/>
    </div>                                                                                      
  )
}

export default Index