function GroupByOccupation() {
  const people = [
    { name: "Alice", age: 25, occupation: "Developer" },
    { name: "Bob", age: 22, occupation: "Designer" },
    { name: "Charlie", age: 30, occupation: "Developer" },
    { name: "David", age: 21, occupation: "Designer" },
    { name: "Eve", age: 28, occupation: "Manager" },
  ];

  const grouped = people.reduce((acc, person) => {
    const key = person.occupation;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(person);
    return acc;
  }, {});

  return (
    <div>
      <h2>People Grouped by Occupation</h2>
      {Object.entries(grouped).map(([occupation, group], index) => (
        <div key={index}>
          <h3>{occupation}</h3>
          <ul>
            {group.map((person, idx) => (
              <li key={idx}>{person.name} - {person.age}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupByOccupation;
