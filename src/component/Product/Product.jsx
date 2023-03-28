import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  const btnClick = props.btnClick;
  return (
    <div className="product-card">
      <div>
        <img src={img} alt="" />
        <div className="product-info">
          <h1 className="title">{name}</h1>
          <p className="price">Price: ${price}</p>
          <p className="seller">Manufacturer: {seller}</p>
          <p className="seller">Rating: {ratings} star</p>
        </div>
      </div>
      <div>
        <button onClick={() => btnClick(props.product)} className="card-btn">
          Add to Cart
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default Product;
