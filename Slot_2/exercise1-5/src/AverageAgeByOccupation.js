function AverageAgeByOccupation() {
  const people = [
    { name: "Alice", age: 25, occupation: "Developer" },
    { name: "Bob", age: 22, occupation: "Designer" },
    { name: "Charlie", age: 30, occupation: "Developer" },
    { name: "David", age: 21, occupation: "Designer" },
    { name: "Eve", age: 28, occupation: "Manager" },
  ];

  // Bước 1: Nhóm theo occupation và tính tổng tuổi + số lượng
  const occupationData = people.reduce((acc, person) => {
    const { occupation, age } = person;
    if (!acc[occupation]) {
      acc[occupation] = { totalAge: 0, count: 0 };
    }
    acc[occupation].totalAge += age;
    acc[occupation].count += 1;
    return acc;
  }, {});

  // Bước 2: Tính tuổi trung bình cho từng occupation
  const averageAges = Object.entries(occupationData).map(([occupation, data]) => ({
    occupation,
    averageAge: (data.totalAge / data.count).toFixed(1),
  }));

  return (
    <div>
      <h2>Average Age by Occupation</h2>
      <ul>
        {averageAges.map((item, index) => (
          <li key={index}>
            {item.occupation}: {item.averageAge} years
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AverageAgeByOccupation;
