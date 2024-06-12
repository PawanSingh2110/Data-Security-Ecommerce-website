
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cloud from './Component/Cloud'
import Footer from './Component/Footer'
import Header from './Component/Header'
import Navbar from './Component/Navbar'
import Recover from './pages/Recover/Recover'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import { useState } from 'react'
import Sign from './Component/Sign'


function App() {
  const [showloging,setShowLogin]=useState(false)
  
  return (
    <>
    {showloging?<Sign setShowLogin={setShowLogin}/>:<></>}
     <div>
      <Navbar  setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cloud' element={<Cloud/>} />
        <Route path='/recovery' element={<Recover/>} />
        

      </Routes>
      <Footer/>
     </div>
    </>
  )
}

export default App
