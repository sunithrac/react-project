import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://mocki.io/v1/264df412-a0a5-4d4b-9ac4-6e42d4a243c4"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      setProducts(data);
    } catch (err) {
      setError("Unable to load products");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2>Loading products...</h2>;
  if (error) return <h2>{error}</h2>;

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
