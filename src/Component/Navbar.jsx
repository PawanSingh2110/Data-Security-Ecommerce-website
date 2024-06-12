import React, { useState } from 'react'
import { SiDatabricks } from 'react-icons/si'
import { Link } from 'react-router-dom'


const Navbar = ({setShowLogin}) => {
  const [Menu,setMenu]=useState("Home")
  return (
    <div className='fixed z-10 top-5 w-[80%] ml-36 backdrop-blur-lg px-7 py-4 rounded-lg '>
        <div className='flex justify-between text-blue-400 '>
        <div className='flex gap-3 items-center text-3xl cursor-pointer '>
            <SiDatabricks className='text-blue-700 font-semibold' />
            <h1>Secure</h1>
        </div>
        <div className='menu cursor-pointer'>
            <ul className='flex text-2xl gap-5'>
                <Link to={"/"} onClick={()=>setMenu("Home")} className={Menu==="Home"?"active":""} >Home</Link>
                <Link to={"/recovery"} onClick={()=>setMenu("Recovery")} className={Menu==="Recovery"?"active":""} >Recovery</Link>
                <Link to={"/cloud"} onClick={()=>setMenu("Cloud")} className={Menu==="Cloud"?"active":""} >Cloud</Link>
                <Link to={"/contact"} onClick={()=>setMenu("Contact")} className={Menu==="Contact"?"active":""} >Contact</Link>
                <button className='text-lg text-white bg-blue-600 px-5 py-2  rounded-md' onClick={()=>setShowLogin(true)}  >signUP</button>
            </ul>
        </div>
        </div>
      
    </div>
  )
}

export default Navbar
