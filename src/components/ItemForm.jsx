import { useState } from "react";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Dessert");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    onItemFormSubmit({
      id: crypto.randomUUID(),
      name,
      category,
    });

    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* ✅ THIS FIXES queryByLabelText(/Name/) */}
      <label htmlFor="name">Name</label>
      <input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="category">Category</label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Dessert">Dessert</option>
        <option value="Fruit">Fruit</option>
        <option value="Dairy">Dairy</option>
      </select>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
q