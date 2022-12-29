import React, { useContext, useState, useRef, useEffect } from 'react'
import { useParams } from "react-router-dom"
import '../../assets/css/buy.css'
import { ImArrowLeft2 } from "react-icons/im";
import { Link } from 'react-router-dom';
import { GiRoundStar } from "react-icons/gi";
import { AppContext } from '../components/ContextProvider';
import Crud from "../apis/crud";
import Swal from 'sweetalert2';

const Buy = () => {
    const [currentQty, setCurrentQty] = useState(1);
    const { productItems, setCartItems } = useContext(AppContext);
    const crud = new Crud();
    const userId = localStorage.getItem("userId");
    const { id } = useParams();
    const imagePath1 = useRef();
    const imagePath2 = useRef();
    const imagePath3 = useRef();
    const imagePath4 = useRef();
    const imagePath5 = useRef();
    const productQty = useRef();
    const product = productItems?.find(({ _id }) => _id === id);

    useEffect(() => {
        imagePath1.current.src = `../build/${product?.image}`;
        imagePath2.current.src = `../build/${product?.image}`;
        imagePath3.current.src = `../build/${product?.image}`;
        imagePath4.current.src = `../build/${product?.image}`;
        imagePath5.current.src = `../build/${product?.image}`;
    }, [product])

    const goCart = async (id) => {
        const qty = productQty.current.innerHTML;
        const createCartData = await crud.post("create/cart", {userId, qty, product});
        if(createCartData.code){
            const cartDataRetrive = await crud.get(`retrive/cart?userId=${userId}&id=${id}`);
            setCartItems(cartDataRetrive.result);
        }
    }

    const goBuy = async (id) => {
        const qty = productQty.current.innerHTML;
        const createBuyData = await crud.post("create/buy", {userId, qty, product});
        if(createBuyData.code){
            Swal.fire({
                title: "Order Successfull",
                icon: "success",
                timer: 3000,
                confirmButtonText: 'hide'
              })
        }
    }

    let decrement = () => {
        if (currentQty > 1) setCurrentQty(currentQty - 1);
    }
    let increment = () => {
        if (currentQty < 5) setCurrentQty(currentQty + 1);
    }

    return (
        <>
            <div className="buy">
                <div className="container pt-5">
                    <div className="row mb-lg-5">
                        <div className="col-lg-4">
                            <Link to='/shop'><ImArrowLeft2 className='back_icon' />Go back</Link>
                            <div className="images">
                                <img ref={imagePath1} alt="" />
                                <div>
                                    <img ref={imagePath2} alt="" />
                                    <img ref={imagePath3} alt="" />
                                    <img ref={imagePath4} alt="" />
                                    <img ref={imagePath5} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="content">
                                <h6>Free shipping</h6>
                                <h3>{product?.name}</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odio nemo, in inventore vitae ipsa quos corporis voluptatem minus suscipit sequi repellendus praesentium illum eaque aut veniam possimus distinctio voluptates.</p>
                                <div className="rating">
                                    <p>{product?.stars} <span><GiRoundStar className='star' /></span></p>
                                    <p>Ratings</p>
                                </div>
                                <div className="price">
                                    <h2>${product?.price}</h2>
                                    <p>upto {product?.discount}% off</p>
                                </div>
                                <div className="qty">
                                    <button onClick={decrement}>-</button>
                                    <h6 ref={productQty}>{currentQty}</h6>
                                    <button onClick={increment}>+</button>
                                    <p>total price </p>
                                    <p> ${product?.price * currentQty}</p>
                                </div>
                                <div className="button">
                                    <button className='orange_button_outline me-4' onClick={() => goCart(product?._id)}>Add to Cart</button>
                                    <button className='button_bg' onClick={()=>goBuy(product?._id)}>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Buy