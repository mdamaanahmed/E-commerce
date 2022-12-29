import React from 'react'
import { GiRoundStar } from "react-icons/gi";
import '../../assets/css/featureCard.css'

const FeatureCard = ({ img, title, company, rating, price, review, showbuypage }) => {
    return (
        <>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 featureCard_padding">
                <div className="box" onClick={showbuypage}>
                    <div className="img">
                        <img src={`../../images/${img}`} alt="" height="100%"/>
                    </div>
                    <div className="content">
                        <p>{company}</p>
                        <h2>{title}</h2>
                        <h1>{price}</h1>
                        <div className="price">
                            <h5>{review} reviews</h5>
                            <p>{rating} <GiRoundStar /></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureCard