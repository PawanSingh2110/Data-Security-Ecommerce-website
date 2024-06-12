import React from 'react'
import Recovery from '../../Component/Recovery'

const Recover = ({setShowLogin}) => {
  return (
    <div className='recover h-[100vh] relative'>
        <div className=' absolute top-[30%] left-40 '>
        <h1 className='text-4xl font-medium text-blue-600'>Data  <span className='text-black'>Recovery </span></h1>
        <p className='w-[35%] mt-5 text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, tempore libero. Molestias quisquam blanditiis cumque, pariatur non ea odio molestiae ratione fugiat sed. Nobis id qui libero voluptas possimus unde?</p>
        <button  className='text-lg text-white bg-blue-600 px-5 py-2  mt-4 rounded-md'>Learn More</button>
        </div>
      
    </div>
  )
}

export default Recover
