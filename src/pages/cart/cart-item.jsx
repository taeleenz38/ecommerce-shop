import React, { useContext } from 'react'
import { ShopContext } from "../../context/shop-context";

const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    return (
        <div className='cartItem'>
            <img src={productImage} />
            <div className='cartDescription'>
                <p><b> {productName}</b></p>
                <p>${price}</p>
                <div className='countHandler'>
                    <button className='btn1' onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                    <button className='btn2' onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
