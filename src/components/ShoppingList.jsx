function ShoppingList({ items, search = "", onSearchChange }) {
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* ✅ CONTROLLED INPUT (THIS IS WHAT YOUR TESTS REQUIRE) */}
      <input
        placeholder="Search"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {/* ✅ REQUIRED BY TEST: .Items container */}
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
