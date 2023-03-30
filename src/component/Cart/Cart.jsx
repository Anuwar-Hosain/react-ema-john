import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log(cart);
  // total price section
  let total = 0;
  let totalShipping = 0;
  for (const product of cart) {
    total = total + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  // tax
  let tax = (total * 7) / 100;
  // grandTotal
  let grandTotal = total + totalShipping + tax;
  return (
    <div className="cart">
      <h4 className="cart-title">Order Summary</h4>
      <p className="para">Selected Items: {cart.length}</p>
      <p className="para">Total Price: ${total}</p>
      <p className="para">Total Shipping Charge: ${totalShipping}</p>
      <p className="para">Tax: ${tax.toFixed(2)}</p>
      <p className="grand">Grand Total: ${grandTotal.toFixed(2)}</p>
      <div>
        <button className="cart-btn">Clear Cart</button>
        <button className="review-btn">Review Order</button>
      </div>
    </div>
  );
};

export default Cart;
