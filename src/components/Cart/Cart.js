import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, cors) => total + cors.price, 0);
    return (
        <div className="cart-area text-center">
            <h2>Order Summery</h2>
            <h6>Course Added: {cart.length}</h6>
            <h3>Total Course Fee: {total}</h3>
        </div>
    );
};

export default Cart;