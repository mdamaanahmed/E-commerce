import React from 'react'
import { GiRoundStar } from "react-icons/gi";
import { BsFillHeartFill } from "react-icons/bs";
import '../../assets/css/topRatedCard.css'

const TopRatedCard = ({ s, w, ts, shoe, title, reco1, reco2, reco3, reco4, heart }) => {
    return (
        <>
            <div className="shadows">
                <div className="box1 box">
                    <div className="img">
                        <div className="img1">
                            <img src={s} alt="" />
                        </div>
                        <div className="img2">
                            <div><img src={w} alt="" /></div>
                            <div> <img src={ts} alt="" /></div>
                            <div><img src={shoe} alt="" /></div>
                        </div>
                    </div>
                    <div className="content">
                        <h3>{title} wear for all time and Recommended by most Users.</h3>
                        <div className="stars">
                            <GiRoundStar className='star_icon' />
                            <GiRoundStar className='star_icon' />
                            <GiRoundStar className='star_icon' />
                            <GiRoundStar className='star_icon' />
                            <GiRoundStar className='star_icon' />
                            <p>rating</p>
                        </div>
                        <div className="recomend">
                            <div>
                                <img src={reco1} alt="" />
                                <img src={reco2} alt="" />
                                <img src={reco3} alt="" />
                                <img src={reco4} alt="" />
                            </div>
                            <p><BsFillHeartFill className='heart_icon' /> {heart}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopRatedCard