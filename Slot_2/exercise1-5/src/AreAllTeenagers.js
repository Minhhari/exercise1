function AreAllTeenagers() {
  const people = [
    { name: "Alice", age: 17, occupation: "Student" },
    { name: "Bob", age: 15, occupation: "Student" },
    { name: "Charlie", age: 18, occupation: "Student" },
  ];

  const allTeenagers = people.every(person => person.age >= 13 && person.age <= 19);

  return (
    <div>
      <h2>Are All Teenagers?</h2>
      <p>{allTeenagers ? "Yes, all are teenagers." : "No, not all are teenagers."}</p>
    </div>
  );
}

export default AreAllTeenagers;
