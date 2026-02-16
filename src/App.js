import React, { useEffect, useState } from "react";
import { products as apiData } from "./data";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(apiData);
    }, 500);
  }, []);

  const addToCart = (item) => {
    const totalQty = cart.length;

    if (totalQty >= 5) {
      alert("Maximum 5 items allowed in cart");
      return;
    }

    setCart([...cart, item]);
  };

  return (
    <>
      <Header count={cart.length} />

      <div className="container">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
}
