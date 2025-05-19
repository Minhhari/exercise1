function FirstTeenager() {
  const people = [
     { name: "Alice", age: 22, occupation: "Developer" },
    { name: "Bob", age: 17, occupation: "Student" },
    { name: "Charlie", age: 15, occupation: "Student" },
    { name: "David", age: 25, occupation: "Designer" },
  ];

  const teenager = people.find(person => person.age >= 13 && person.age <= 19);

  return (
    <div>
      <h2>First Teenager</h2>
      {teenager ? (
        <p>{teenager.name} - {teenager.age} years old - {teenager.occupation}</p>
      ) : (
        <p>No teenager found</p>
      )}
    </div>
  );
}

export default FirstTeenager;
