import React from 'react';
import './App.css';
import Ex1 from './ex1';
import Ex2 from './ex2';
import Ex3 from './ex3';
import Ex4 from './ex4';
import Ex5 from './ex5';
import Ex6 from './ex6';
import Ex7 from './ex7';
import Ex8 from './ex8';
import Ex9 from './ex9';
import Ex10 from './ex10';

function App() {
  return (
    <div className="App">
      <div className="exercise-card">
        <h2>Exercise 1</h2>
        <Ex1 />
      </div>

      <div className="exercise-card">
        <h2>Exercise 2</h2>
        <Ex2 />
      </div>

      <div className="exercise-card">
        <h2>Exercise 3</h2>
        <Ex3 />
      </div>

      <div className="exercise-card">
        <h2>Exercise 4</h2>
        <Ex4 />
      </div>

      <div className="exercise-card">
        <h2>Exercise 5</h2>
        <Ex5 />
      </div>

      <div className="exercise-card">
        <h2>Exercise 6</h2>
        <Ex6 />
      </div>

      <div className="exercise-card">
        <h2>Exercise 7</h2>
        <Ex7 />
      </div>

      <div className="exercise-card">
        <h2>Exercise 8</h2>
        <Ex8 />
      </div>

      <div className="exercise-card">
        <h2>Exercise 9</h2>
        <Ex9 />
      </div>

      <div className="exercise-card">
        <h2>Exercise 10</h2>
        <Ex10 />
      </div>
    </div>
  );
}

export default App;
