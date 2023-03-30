import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
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
  const [cart, setCart] = useState([]);
  // product btn section
  const btnClick = (product) => {
    let newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <section className="shops-container">
      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            btnClick={btnClick}
          ></Product>
        ))}
      </div>
      <div className="order-summary">
        <Cart cart={cart}></Cart>
      </div>
    </section>
  );
};

export default Shop;
