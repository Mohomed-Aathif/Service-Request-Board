export default function SearchBar({
  searchTerm,
  onChange,
}) {

  return (
    <input
        type="text"
        placeholder="Search jobs..."
        value={searchTerm}
        onChange={(e) =>
        onChange(e.target.value)
        }
        className="border rounded-lg px-4 py-2 w-80"
    />
    );
}