import { useState } from "react";

export default function QuantityModal({ units, close, addToCart }) {
  const [selected, setSelected] = useState(units[0]);

  return (
    <div className="modal">
      <div className="modal-box">
        <h3>Select Quantity</h3>

        <select
          onChange={(e) =>
            setSelected(units.find((u) => u.id === e.target.value))
          }
        >
          {units.map((u) => (
            <option key={u.id} value={u.id}>
              {u.weight}
              {u.unit} - ₹{u.sellingPrice}
            </option>
          ))}
        </select>

        <p>Price: ₹{selected.sellingPrice}</p>

        <button
          onClick={() => {
            addToCart(selected);
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
