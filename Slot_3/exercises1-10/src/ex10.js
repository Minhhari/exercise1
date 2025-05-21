import { useState } from "react";

const Ex10 = () => {
  const employees = [
    { name: "Anna", department: "HR" },
    { name: "Brian", department: "IT" },
    { name: "Clara", department: "Finance" },
    { name: "Ann", department: "IT" },
    { name: "Elisabeth", department: "HR" }
  ];

  const [search, setSearch] = useState("");

  const filtered = employees.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul>
        {filtered.map((e, index) => (
          <li key={index}>{e.name} - {e.department}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ex10;
