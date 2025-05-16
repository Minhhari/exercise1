function PersonDetail() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 30, occupation: "Designer" },
    { name: "Charlie", age: 22, occupation: "Student" },
  ];

  return (
    <div>
      <h2>People Details</h2>
      {people.map((person, index) => (
        <div key={index} style={{ marginBottom: "1rem" }}>
          <p><strong>Name:</strong> {person.name}</p>
          <p><strong>Age:</strong> {person.age}</p>
          <p><strong>Occupation:</strong> {person.occupation}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PersonDetail;
