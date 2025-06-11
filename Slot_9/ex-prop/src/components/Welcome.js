const Welcome = ({ name, style }) => {
  return (
    <div>
      <h1 style={style}>Hello, {name}</h1>
    </div>
  );
};

export default Welcome;
