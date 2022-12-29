import React, { useEffect, useState, useRef, useContext } from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import '../../assets/css/cartItem.css';
import { AppContext } from './ContextProvider'
import Crud from '../apis/crud';

const CartItem = ({ img, title, price, discount, qty, product }) => {
    const [productQty, setProductQty] = useState(+qty);
    const { cartItems, setCartItems } = useContext(AppContext);
    const imageUrl = useRef();
    const currentQty = useRef();
    const crud = new Crud();

    useEffect(() => {
        imageUrl.current.src = `../build/${img}`;
    }, [img])

    const deleteItem = async (productId) => {
        const userId = localStorage.getItem("userId");
        const deleteItem = await crud.delete("delete/cart", { userId, productId });
        if(deleteItem?.result.deletedCount){
            setCartItems(cartItems?.filter(({productId: {_id}})=> productId !== _id));
        }
    }

    let decrement = async (product) => {
        if (productQty > 1) {
            setProductQty(productQty - 1);
            const userId = localStorage.getItem("userId");
            const qty = --currentQty.current.innerHTML;
            await crud.post("create/cart", { userId, qty, product });
        }
    }
    let increment = async (product) => {
        if (productQty < 5) {
            setProductQty(productQty + 1);
            const userId = localStorage.getItem("userId");
            const qty = ++currentQty.current.innerHTML;
            await crud.post("create/cart", { userId, qty, product });
        }
    }

    return (
        <>
            <div className="content">
                <div className="image">
                    <img ref={imageUrl} alt="" />
                    <div className="title">
                        <h5>{title}</h5>
                        <p>description</p>
                        <p>in stock</p>
                        <div>
                            <h4>${price}</h4>
                            <p>{discount}% off</p>
                        </div>
                    </div>
                </div>
                <div className="qty">
                    <button onClick={() => decrement(product)}>-</button>
                    <h6 ref={currentQty}>{productQty}</h6>
                    <button onClick={() => increment(product)}>+</button>
                </div>
                <div className="total">
                    <div onClick={() => deleteItem(product._id)}>
                        <AiOutlineDelete className='delete_icon' />
                    </div>
                    <div>
                        <p>total price</p>
                        <p>${price * productQty}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem