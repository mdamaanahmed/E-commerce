import React, { useState } from 'react'
import { RiPhoneFill } from 'react-icons/ri';
import { IoMailSharp } from 'react-icons/io5';
import { MdLocationOn } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsTelegram } from "react-icons/bs";
import '../../assets/css/contact.css';
import Crud from "../apis/crud";
import Swal from 'sweetalert2';

const Contact = () => {
  const [data, setData] = useState({});
  const userId = localStorage.getItem("userId");

  const contactData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleContactData = async () => {
    const crud = new Crud();
    const res = await crud.post("create/contact", {userId, data});
    if(res.code){
      Swal.fire({
        title: res.result,
        icon: "success",
        timer: 3000,
        confirmButtonText: 'hide'
      });
    }
  };

  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 heading_design1 mt-5">
              <h1>Contact Us</h1>
              <p>any question or remarks? just write us a message!</p>
            </div>
            <div className="col-lg-12 main_box">
              <div className="row">
                <div className="col-lg-5">
                  <div className="left_content">
                    <div className="content_heading">
                      <h3>Contact Information</h3>
                      <p>Fill up The form and our Team will get back to you within 24 hours.</p>
                    </div>
                    <div className="info">
                      <p><RiPhoneFill className='info_icon' />+91 8603485082</p>
                      <p><IoMailSharp className='info_icon' />info@elearners.com</p>
                      <p><MdLocationOn className='info_icon' />543/d Street 4656 Delhi</p>
                    </div>
                    <div className="social_midea">
                      <div>
                        <FaFacebookF className='social_icon' />
                      </div>
                      <div>
                        <BsTelegram className='social_icon' />
                      </div>
                      <div>
                        <SiInstagram className='social_icon' />
                      </div>
                      <div>
                        <FaLinkedinIn className='social_icon' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="right_content">
                    <div className="row">
                      <div className="col-lg-6">
                        <label htmlFor="firstname">First Name *</label>
                        <input type="text" id='firstname' name='firstname' placeholder='ex: John' onChange={(e) => contactData(e)} />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="lastname">Last Name *</label>
                        <input type="text" id='lastname' name='lastname' placeholder='ex: Doe' onChange={(e) => contactData(e)} />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="email">Email *</label>
                        <input type="email" id='email' name='email' placeholder='info@gmail.com' onChange={(e) => contactData(e)} />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="phone">Phone *</label>
                        <input type="number" id='phone' name='phone' placeholder='+91 7568589384' onChange={(e) => contactData(e)} />
                      </div>
                      <div className="col-lg-12">
                        <label htmlFor="msg">Message</label>
                        <textarea name="msg" id='msg' rows="4" placeholder='hello...' onChange={(e) => contactData(e)}></textarea>
                      </div>
                      <div className="col-lg-12 send_button">
                        <button className='button_bg' onClick={handleContactData}>Send Message</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact