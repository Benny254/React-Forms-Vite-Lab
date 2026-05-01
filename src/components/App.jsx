import { useState } from "react";
import Filter from "./Filter";
import ItemForm from "./ItemForm";
import ShoppingList from "./ShoppingList";

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  return (
    <div>
      <Filter search={search} onSearchChange={setSearch} />
      <ItemForm onItemFormSubmit={handleAddItem} />
      <ShoppingList items={items} search={search} />
    </div>
  );
}

export default App;
