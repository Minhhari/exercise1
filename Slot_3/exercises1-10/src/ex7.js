const Ex7 = () => {
  const employees = [
    { name: "Anna", department: "HR" },
    { name: "Brian", department: "IT" },
    { name: "Clara", department: "Finance" },
    { name: "Ann", department: "IT" }
  ];

  employees.sort((a, b) => 
    a.department.localeCompare(b.department) ||
    a.name.localeCompare(b.name)
  );

  return (
    <ul>
      {employees.map((e, index) => (
        <li key={index}>{e.name} - {e.department}</li>
      ))}
    </ul>
  );
};

export default Ex7;
