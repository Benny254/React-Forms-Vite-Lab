function ShoppingList({ items, search = "", onSearchChange }) {
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* SEARCH INPUT (THIS WAS MISSING OR WRONG) */}
      <input
        placeholder="Search"
        value={search}
        onChange={(e) => onSearchChange?.(e.target.value)}
      />

      {/* ITEMS CONTAINER (TEST EXPECTS .Items) */}
      <div className="Items">
        {filteredItems.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingList;
