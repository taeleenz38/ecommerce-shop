import React from 'react'

const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    return (
        <div className='cartItem'>
            <img src={productImage} />
            <div className='cartDescription'>
                <p><b> {productName}</b></p>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default CartItem
