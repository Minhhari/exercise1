const Ex8 = () => {
  const employees = [
    { name: "Anna", department: "HR" },
    { name: "Brian", department: "IT" },
    { name: "Clara", department: "Finance" },
    { name: "Ann", department: "IT" },
    { name: "Elisabeth", department: "HR" }
  ];

  const grouped = employees.reduce((acc, e) => {
    acc[e.department] = acc[e.department] || [];
    acc[e.department].push(e.name);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(grouped).map(([dept, names]) => (
        <div key={dept}>
          <h3>{dept}</h3>
          <ul>
            {names.map((name, i) => <li key={i}>{name}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Ex8;
