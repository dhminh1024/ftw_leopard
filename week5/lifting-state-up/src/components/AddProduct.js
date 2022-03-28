import React, { useState } from "react";

function AddProduct({ addProduct }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddProduct;
