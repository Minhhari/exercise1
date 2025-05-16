function PeopleList() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 30, occupation: "Designer" },
    { name: "Charlie", age: 22, occupation: "Student" },
  ];

  return (
    <div>
      <h2>People List</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            <strong>Name:</strong> {person.name}, 
            <strong> Age:</strong> {person.age}, 
            <strong> Occupation:</strong> {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList;
