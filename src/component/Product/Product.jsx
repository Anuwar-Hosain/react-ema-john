import React from "react";
import "./Product.css";
const Product = (props) => {
  console.log(props.product);
  const { img, name, price, seller, ratings } = props.product;
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
        <button className="card-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
