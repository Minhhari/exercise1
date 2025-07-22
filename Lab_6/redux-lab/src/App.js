import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';
import QuizResult from './components/QuizResult';
import QuizReview from './components/QuizReview';
import AddQuestion from './components/AddQuestion';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<div className="container mt-3"><h2>Welcome to the Quiz App</h2></div>} />
        <Route path="/about" element={<div className="container mt-3"><h2>About Page</h2></div>} />
        <Route path="/news" element={<div className="container mt-3"><h2>News Page</h2></div>} />
        <Route path="/contact" element={<div className="container mt-3"><h2>Contact Page</h2></div>} />

        <Route path="/quizzes" element={<Quiz />} />
        <Route path="/quiz/result" element={<QuizResult />} />
        <Route path="/quiz/review" element={<QuizReview />} />
        <Route path="/quiz/add" element={<AddQuestion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;