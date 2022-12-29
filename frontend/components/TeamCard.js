import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsTelegram } from "react-icons/bs";

const TeamCard = ({ img, name, role }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="team my-4">
                    <div className="img">
                        <img src={img} alt="" />
                    </div>
                    <div className="content">
                        <h5>{name}</h5>
                        <p>{role}</p>
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
            </div>
        </>
    )
}

export default TeamCard