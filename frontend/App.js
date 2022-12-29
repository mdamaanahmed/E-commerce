import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './helpers/ProtectedRoute'
import PublicRoute from './helpers/PublicRoute'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Profile from './pages/Profile'
import Buy from './pages/Buy'
import About from './pages/About'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import Footer from './components/Footer'
import AppContextProvider from './components/ContextProvider'


const App = () => {
  return (
    <>
      <AppContextProvider>
        {/* <Routes>
          <Route element={<Navbar />} >
            <Route element={<Footer />} >
              <Route path='/' element={<Navigate replace to="/home" />} />
              <Route path='/home' element={<Home />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/buy/:id' element={<Buy />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} /> 
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Route>
          </Route>
       </Routes> */}
       
        <Routes>
          <Route exact path='/' element={<ProtectedRoute />} >
            <Route element={<Navbar />} >
              <Route element={<Footer />} >
                <Route path='/' element={<Navigate replace to="/home" />} />
                <Route path='/home' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/buy/:id' element={<Buy />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
              </Route>
            </Route>
          </Route>
          <Route exact path='/' element={<PublicRoute />} >
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
        </Routes>
      </AppContextProvider>
    </>
  )
}

export default App