import React from 'react'
import { SiDatabricks } from 'react-icons/si'
import { TfiEmail } from "react-icons/tfi";
import { FaInstagramSquare,FaFacebook,FaTwitter,FaYahoo } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer h-[400px]  m-auto relative'>
      <div className='  absolute top-20 left-[18%]  '>
      <div className='text-3xl flex gap-3 items-center cursor-pointer'>
        <SiDatabricks className='text-blue-500 '/>
        <h1 className=' font-semibold text-blue-600'>Secured.</h1>
      </div>
      {/* footer content */}
      <div className='flex gap-14 mt-10'>
        {/* navigation */}
        <div className='cursor-pointer'>
            <h1 className='text-2xl font-medium'>Navigation</h1>
            <p className='mt-4'>Home</p>
            <p className='mt-1'>Data</p>
            <p className='mt-1'>Cloud</p>
            <p className='mt-1'>Contact</p>

        </div >
        {/* my account */}
        <div className='cursor-pointer'>
        <h1 className='text-2xl font-medium'>My Account</h1>
            <p className='mt-4'>Login</p>
            <p className='mt-1'>My Data</p>
            <p className='mt-1'>Cloud Security</p>
            <p className='mt-1'>Important</p>
            <p className='mt-1'>Specilist</p>

        </div>
        {/* information */}
        <div className='cursor-pointer'>
        <h1 className='text-2xl font-medium'>Information</h1>
            <p className='mt-4'>Membership</p>
            <p className='mt-1'>Data Protocols</p>
            <p className='mt-1'>Cloud Protocols</p>
            <p className='mt-1'>Security Roles</p>

        </div>
        {/* legeal */}
        <div className='cursor-pointer'>
        <h1 className='text-2xl font-medium'>Legeal</h1>
            <p className='mt-4'>Policie</p>
            <p className='mt-1'>terms & Condition</p>
            <p className='mt-1'>Cloud Protocols</p>

        </div>
        {/* join team */}
        <div className='cursor-pointer'>
        <h1 className='text-2xl font-medium'>Join our team</h1>
            
           <div className='flex border-2 border-black w-72 py-2 px-7 justify-between rounded-lg mt-3'>
           <input type="email" placeholder='emailId' className='outline-0' />
           <TfiEmail className='text-gray-400  text-lg'/>
           </div>
           <div className='flex text-2xl mt-3 px-5 gap-5'>
            <FaFacebook/>
            <FaInstagramSquare/>
            <FaTwitter/>
            <FaYahoo/>

           </div>

        </div>
      </div>


      </div>
    </div>
  )
}

export default Footer
