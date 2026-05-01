import { useState } from "react";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: crypto.randomUUID(),
      name,
      category,
    };

    onItemFormSubmit(newItem);

    // reset form
    setName("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Category
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
