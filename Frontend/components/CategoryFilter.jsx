export default function CategoryFilter({
  selectedCategory,
  onChange,
}) {

  const categories = [
    "",
    "Plumbing",
    "Electrical",
    "Painting",
    "Joinery",
  ];

  return (
    <select
      value={selectedCategory}
      onChange={(e) =>
        onChange(e.target.value)
      }
      className="border rounded-lg px-4 py-2"
    >
      <option value="">
        All Categories
      </option>

      {categories
        .filter(Boolean)
        .map((category) => (
          <option
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
    </select>
  );
}