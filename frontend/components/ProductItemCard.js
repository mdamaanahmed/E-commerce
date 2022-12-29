import React, { useEffect, useRef } from 'react'
import { GiRoundStar } from 'react-icons/gi';
import '../../assets/css/productItemCard.css'

const ProductItemCard = ({ img, title, company, rating, price, discount, review, showbuypage }) => {
    const imageUrl = useRef();

    useEffect(() => {
        imageUrl.current.src = `../build/${img}`;
    }, [img])

    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="box" onClick={showbuypage}>
                    <div className="img">
                        <img ref={imageUrl} alt="" height="100%" />
                    </div>
                    <div className="content">
                        <p>{company}</p>
                        <h2>{title}</h2>
                        <h3>{price}$ <span>{discount}%</span></h3>
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

export default ProductItemCard