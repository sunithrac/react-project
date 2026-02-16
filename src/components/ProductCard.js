import { useState } from "react";
import QuantityModal from "./QuantityModal";
import VariantModal from "./VariantModal";

export default function ProductCard({ product, addToCart }) {
  const [showQty, setShowQty] = useState(false);
  const [showVariant, setShowVariant] = useState(false);

  const discount =
    ((product.mrpPrice - product.sellingPrice) / product.mrpPrice) * 100;

  const handleAdd = () => {
    if (product.variants) setShowVariant(true);
    else if (product.units) setShowQty(true);
    else addToCart(product);
  };

  return (
    <div className="card">
      <img src={product.image} alt="" />

      <div className="card-body">
        <div className="title-row">
          <h3>{product.name}</h3>
          <div>
            <span className="mrp">₹{product.mrpPrice}</span>
            <span className="price"> ₹{product.sellingPrice}</span>
            <small className="discount">{discount.toFixed(0)}% OFF</small>
          </div>
        </div>

        <p>{product.desc}</p>
      </div>

      <button onClick={handleAdd}>Add to Cart</button>

      {showQty && (
        <QuantityModal
          units={product.units}
          close={() => setShowQty(false)}
          addToCart={addToCart}
        />
      )}

      {showVariant && (
        <VariantModal
          variants={product.variants}
          close={() => setShowVariant(false)}
          addToCart={addToCart}
        />
      )}
    </div>
  );
}
