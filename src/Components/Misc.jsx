import React from 'react'
import logo from "../Assets/logo.png"
import {BsMouse} from "react-icons/bs"
const Misc = () => {
  return (
    <>
    <div className="cursor"></div>
    <a href="/" className="logo">
    <img src={logo} alt="Logo" />
    </a>
    <a href="/franchise" className='franchiseBtn' data-cursorpointer={true}>
        GET A FRACHISE
    </a>
    <BsMouse className="scrollBtn"/>
    </>
  )
}

export default Misc