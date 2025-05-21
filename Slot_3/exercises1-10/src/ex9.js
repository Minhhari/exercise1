const Ex9 = () => {
  const employees = [
    { name: "Anna", age: 50 },
    { name: "Clara", age: 19 },
    { name: "Elisabeth", age: 16 }
  ];

  const isTeenager = employees.some(e => e.age >= 10 && e.age <= 20);

  return <p>Is any employee a teenager? {isTeenager ? "Yes" : "No"}</p>;
};

export default Ex9;
