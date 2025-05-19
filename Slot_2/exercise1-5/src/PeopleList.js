function PeopleList() {
  const people = [
     { name: "Alice", age: 22, occupation: "Developer" },
    { name: "Bob", age: 17, occupation: "Student" },
    { name: "Charlie", age: 15, occupation: "Student" },
    { name: "David", age: 25, occupation: "Designer" },
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
