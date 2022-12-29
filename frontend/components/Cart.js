import React, { useContext, useState, useRef, useEffect } from 'react'
import '../../assets/css/cart.css'
import CardItem from './CartItem'
import { AppContext } from './ContextProvider'
import Crud from "../apis/crud";
import Swal from 'sweetalert2';

const Cart = () => {
    const { cartItems, setCartItems } = useContext(AppContext);
    const userId = localStorage.getItem("userId");
    const crud = new Crud();

    const goCart = async () => {
        const cartDataRetrive = await crud.get(`retrive/cart?userId=${userId}`);
        setCartItems(cartDataRetrive.result);
    }

    const goBuy = async () => {
        const createBuyData = await crud.post("create/buy", {userId});
        if(createBuyData.code){
            setCartItems([]);
            Swal.fire({
                title: "Order Successfull",
                icon: "success",
                timer: 3000,
                confirmButtonText: 'hide'
              });
        }
    }

    useEffect(() => {
        goCart();
    }, [])

    return (
        <>
            <div className="cart">
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">My Cart</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {
                                    cartItems?.map((item, i) => {
                                        return <CardItem key={i} 
                                            qty={item.qty} product={item.productId}
                                            img={item.productId.image} title={item.productId.name} price={item.price} discount={item.productId.discount} />
                                    })
                                }
                            </div>
                            <div className="modal-footer">
                                <button type="button" data-bs-dismiss="modal">Close</button>
                                <button type="button" data-bs-dismiss="modal" className="button_outline" onClick={()=> goBuy()}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart