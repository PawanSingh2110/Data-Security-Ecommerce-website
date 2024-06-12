import React from 'react'
import { useNavigate } from 'react-router-dom'

const Recovery = () => {
  const navigation = useNavigate()
  return (
    <div className='recovery w-full h-[100vh] relative'>
      <div className=' absolute left-[50%] top-[35%]'>
        <h1 className='text-4xl font-medium text-blue-600'>Data  <span className='text-black'>Recovery </span></h1>
        <p className='w-[70%] mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, tempore libero. Molestias quisquam blanditiis cumque, pariatur non ea odio molestiae ratione fugiat sed. Nobis id qui libero voluptas possimus unde?</p>
        <button className='text-lg text-white bg-blue-600 px-5 py-2  mt-4 rounded-md'>Learn More</button>
      </div>
    </div>
  )
}

export default Recovery
