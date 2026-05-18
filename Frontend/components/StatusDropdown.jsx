export default function StatusDropdown({
  currentStatus,
  onChange,
  loading,
}) {

  const statuses = [
    "Open",
    "In Progress",
    "Closed",
  ];

  return (
    <select
      value={currentStatus}
      onChange={(e) =>
        onChange(e.target.value)
      }
      disabled={loading}
      className="border rounded-lg px-4 py-2"
    >

      {statuses.map((status) => (
        <option
          key={status}
          value={status}
        >
          {status}
        </option>
      ))}

    </select>
  );
}