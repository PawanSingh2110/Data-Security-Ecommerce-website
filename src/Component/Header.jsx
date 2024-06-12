import React from 'react'

const Header = () => {
  return (
    <div className='header w-full h-[100vh] bg-slate-400'>
        <div className='p-64'>
            <h1 className='text-5xl  text-white '>Data</h1>
            <h1 className='text-5xl text-blue-700 '>Secure</h1>
            <h1 className='text-5xl text-white '>Protection</h1>
            <button className='text-xl text-white bg-blue-600 px-5 py-2 mt-4 rounded-md'>Learn more</button>
        </div>
    
    </div>
  )
}

export default Header
