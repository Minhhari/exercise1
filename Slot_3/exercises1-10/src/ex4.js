const averageAge = (...ages) => {
  const total = ages.reduce((sum, age) => sum + age, 0);
  return (total / ages.length).toFixed(2);
};

const Ex4 = () => {
  const avg = averageAge(30, 40, 22, 16);
  return <p>Average Age: {avg}</p>;
};

export default Ex4;
