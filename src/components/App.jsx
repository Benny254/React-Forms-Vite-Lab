import { useState } from "react";
import ShoppingList from "./ShoppingList";
import ItemForm from "./ItemForm";

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  function handleAddItem(item) {
    setItems((prev) => [...prev, item]);
  }

  return (
    <div>
      <ItemForm onItemFormSubmit={handleAddItem} />

      <ShoppingList
        items={items}
        search={search}
        onSearchChange={setSearch}
      />
    </div>
  );
}

export default App;
