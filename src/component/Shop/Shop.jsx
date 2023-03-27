import React, { useEffect, useState } from "react";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="shops-container">
      <div className="products">
        <h2>new products: {products.length}</h2>
      </div>
      <div className="order-summary">
        <h4>Order Summary</h4>
      </div>
    </section>
  );
};

export default Shop;
