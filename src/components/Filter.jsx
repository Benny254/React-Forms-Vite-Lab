function Filter({ search, onSearchChange }) {
  return (
    <input
      placeholder="Search"
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default Filter;
