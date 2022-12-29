import React, { useState, useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import '../../assets/css/navbar.css'
import { IoBagHandleOutline } from "react-icons/io5";
import Cart from './Cart';
import team1 from '../../assets/images/team1.jpg';
import { AppContext } from './ContextProvider';

const Navbar = () => {
  const { cartItems } = useContext(AppContext);
  const [active, setActive] = useState("");
  let navigate = useNavigate();

  const activeSidebar = () => {
    setActive("active_sidebar");
  };

  const hideSidebar = () => {
    setActive("");
  };

  const redirectOnLogin = () => {
    navigate('/login')
  };

  return (
    <>
      {/* cart component working for both navbars */}
      <Cart />
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container main_navbar d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/">E-commerce</Link>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse d-flex justify-content-center align-items-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className='button'>
            <button type='button' data-bs-toggle="modal" data-bs-target="#staticBackdrop"><IoBagHandleOutline /> <span>{cartItems.length}</span></button>
            {/* <Cart /> */}
            <button className='outline_button1' onClick={redirectOnLogin}>Sign in</button>
            <div className="profile">
              <Link to="/profile">
                <img src={team1} alt="" />
              </Link>
            </div>
          </div>
        </div>

        <div className="container side_navbar d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/">E-commerce</Link>
          <button type='button' className='m-0' data-bs-toggle="modal" data-bs-target="#staticBackdrop"><IoBagHandleOutline /> <span>{cartItems.length}</span></button>
          {/* <Cart /> */}
          <div onClick={activeSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </div>
          <div className={`collapse navbar-collapse d-flex flex-column justify-content-start align-items-center ${active}`} id="navbarNav">
            <div className='button'>
              <button className='outline_button1 fs-6' onClick={redirectOnLogin}>Sign in</button>
              <div className="profile m-0">
                <Link to="/profile">
                  <img src={team1} alt="" />
                </Link>
              </div>
            </div>
            <ul className="position-relative navbar-nav pt-5">
              <div onClick={hideSidebar} className='position-absolute top-0 end-0 p-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </div>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default Navbar