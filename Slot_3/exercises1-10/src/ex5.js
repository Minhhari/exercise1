const Ex5 = () => {
  const employees = [
    { name: "Anna" },
    { name: "Brian" },
    { name: "Clara" },
    { name: "Ann" },
    { name: "Elisabeth" }
  ];

  return (
    <select>
      {employees.map((e, index) => (
        <option key={index}>{e.name}</option>
      ))}
    </select>
  );
};

export default Ex5;
