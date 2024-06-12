import React from 'react'


const Contact = () => {
  return (
    <div className='contact h-[100vh] relative'>
        <div className=' absolute top-[20%] left-[40%]'>
            <h1 className='text-blue-400 text-4xl font-medium mb-5 ml-20'>Contact <span className='text-white'>Us</span></h1>
            <input type="text" placeholder='Enter your Name' required className='w-96 outline-0 border-2 border-orange-400 px-5 py-2 rounded-lg ' /> <br/> <br />
            <input type="EmailId" placeholder='EmailId' required className='w-96 outline-0 border-2 border-orange-400 px-5 py-2 rounded-lg' /> <br/> <br />
            <input type="PhoneNO" placeholder='+91............' required className='w-96 outline-0 border-2 border-orange-400 px-5 py-2 rounded-lg' /> <br/> <br />
            <textarea placeholder='Enter your message' className='w-96 outline-0 border-2 border-orange-400 px-5 py-2 rounded-lg' />

        </div>
      
    </div>
  )
}

export default Contact
