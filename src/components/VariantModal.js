import React, { useState } from "react";

export default function VariantModal({ variants, close, addToCart }) {
  const [variant, setVariant] = useState(variants[0]);
  const [unit, setUnit] = useState(variants[0].units[0]);

  const changeVariant = (name) => {
    const v = variants.find((x) => x.name === name);
    setVariant(v);
    setUnit(v.units[0]);
  };

  return (
    <div className="modal">
      <div className="modal-box">
        <h3>Select Flavor</h3>

        <select onChange={(e) => changeVariant(e.target.value)}>
          {variants.map((v) => (
            <option key={v.name}>{v.name}</option>
          ))}
        </select>

        <h3>Select Quantity</h3>

        <select
          onChange={(e) =>
            setUnit(variant.units.find((u) => u.id === e.target.value))
          }
        >
          {variant.units.map((u) => (
            <option key={u.id} value={u.id}>
              {u.weight}
              {u.unit} - ₹{u.sellingPrice}
            </option>
          ))}
        </select>

        <p>Price: ₹{unit.sellingPrice}</p>

        <button
          onClick={() => {
            addToCart({ ...variant, ...unit });
            close();
          }}
        >
          Add
        </button>

        <button onClick={close}>Cancel</button>
      </div>
    </div>
  );
}
