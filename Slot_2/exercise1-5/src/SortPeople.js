function SortPeople() {
  const people = [
    { name: "Alice", age: 25, occupation: "Developer" },
    { name: "Bob", age: 22, occupation: "Designer" },
    { name: "Charlie", age: 30, occupation: "Developer" },
    { name: "David", age: 21, occupation: "Designer" },
    { name: "Eve", age: 28, occupation: "Manager" },
  ];

  // Clone mảng trước khi sort để tránh ảnh hưởng dữ liệu gốc
  const sortedPeople = [...people].sort((a, b) => {
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;
    return a.age - b.age;
  });

  return (
    <div>
      <h2>Sorted People (by Occupation, then Age)</h2>
      <ul>
        {sortedPeople.map((person, index) => (
          <li key={index}>
            {person.name} - {person.age} - {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortPeople;
