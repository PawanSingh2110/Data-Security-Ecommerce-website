import React, { useState } from 'react'
import { MdCancel } from "react-icons/md";

const Sign = ({setShowLogin}) => {
    const [currentstate,SetcurrentState] = useState("SignUp")
  return (
    <div className='  absolute z-20  h-full w-full  backdrop-blur-md' id='login'>
      <div className=' relative w-full h-full'>
      <div className=' login w-[450px] h-[470px] bg-white absolute left-[40%] top-40 rounded-2xl '>
     <div className='flex justify-between items-center' >
     <h1 className='text-blue-400 text-3xl ml-40'>{currentstate}</h1>
      <MdCancel   onClick={()=>setShowLogin(false)} className='text-4xl text-red-600 cursor-pointer mr-5 mt-2'/>

     </div>
     <div className='  '>
      {
        currentstate==="LogIn"?
        <div className='mt-5'>
        
        <input type="EmailId" placeholder='EmailId'  required className='outline-0 border-orange-500 w-[70%]  ml-16 py-3 px-5 rounded-full'/>
        <br /> <br />
        <input type="Password" placeholder=' Enter Password'  required className='outline-0 border-orange-500 w-[70%] mx-16 py-3 px-5 rounded-full backdrop-blur-sm'/>
        </div>
        :
        <div className='mt-5'>
        <input type="text" placeholder='Enter NAme'  required className='outline-0 border-orange-500 w-[70%] mx-16 py-3 px-5 rounded-full backdrop-blur-sm' />
        <br /><br />
        <input type="EmailId" placeholder='EmailId'  required className='outline-0 border-orange-500 w-[70%] mx-16 py-3 px-5 rounded-full backdrop-blur-sm' />
        <br /><br />
        <input type="Password" placeholder=' Enter Password'  required className='outline-0 border-orange-500 w-[70%] mx-16 py-3 px-5 rounded-full backdrop-blur-sm' />
        </div>
      }
      

     </div>
     <button className='bg-orange-500 mt-5 ml-28 w-[50%] px-8 py-3 rounded-full'>{
      currentstate==="SignUp" ?"Create Account":"LogIn"
      
      }</button>

      <div className='flex p-5'>
        <input type="checkbox" required className='mr-3 mb-5' />
        <p className=' text-lg text-white'>I have read all the document care and agree all the term and condition  </p>
      </div>
      <div>
        <p className=' text-xl text-white ml-20'>{
          currentstate==="LogIn"? <p>"Dont have account " <span className='text-orange-500 cursor-pointer font-medium underline' onClick={()=>SetcurrentState("SignUp")}>SignUp</span></p> : <p>"Already have an account?"<span className='text-orange-500 cursor-pointer underline' onClick={()=>SetcurrentState("LogIn")} >LogIn</span></p>
          
          }</p>
      </div>





      </div>
      </div>
    </div>
  )
}

export default Sign
