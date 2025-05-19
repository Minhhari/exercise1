function OldestYoungest() {
  const people = [
    { name: "Alice", age: 25, occupation: "Developer" },
    { name: "Bob", age: 22, occupation: "Designer" },
    { name: "Charlie", age: 30, occupation: "Manager" },
    { name: "David", age: 18, occupation: "Student" },
  ];

  // Tìm người lớn tuổi nhất
  const oldest = people.reduce((max, person) =>
    person.age > max.age ? person : max
  );

  // Tìm người trẻ nhất
  const youngest = people.reduce((min, person) =>
    person.age < min.age ? person : min
  );

  return (
    <div>
      <h2>Oldest and Youngest Person</h2>

      <h3>Oldest:</h3>
      <p>{oldest.name} - {oldest.age} years old - {oldest.occupation}</p>

      <h3>Youngest:</h3>
      <p>{youngest.name} - {youngest.age} years old - {youngest.occupation}</p>
    </div>
  );
}

export default OldestYoungest;
