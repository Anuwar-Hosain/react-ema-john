import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log(props);
  // total price section
  let total = 0;
  for (const product of cart) {
    total = total + product.price;
  }
  return (
    <div className="cart">
      <h4 className="cart-title">Order Summary</h4>
      <p className="para">Selected Items: {cart.length}</p>
      <p className="para">Total Price: ${total}</p>
      <p className="para">Total Shipping Charge: $5</p>
      <p className="para">Tax: $114</p>
      <p className="grand">Grand Total: $1559</p>
      <div>
        <button className="cart-btn">Clear Cart</button>
        <button className="review-btn">Review Order</button>
      </div>
    </div>
  );
};

export default Cart;
