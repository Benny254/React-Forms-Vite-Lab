function ShoppingList({ items = [], search = "" }) {
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Items">
      {filteredItems.map((item) => (
        <div key={item.id}>
          {item.name} - {item.category}
        </div>
      ))}
    </div>
  );
}

export default ShoppingList;
