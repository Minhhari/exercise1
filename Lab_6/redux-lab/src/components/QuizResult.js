import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuizResult = () => {
  const { questions } = useSelector(state => state.quiz);
  const navigate = useNavigate();

  return (
    <div className="container mt-3">
      {/* Banner đen trắng */}
      <h1 className="bg-dark text-white text-center py-3">Quiz Review</h1>

      {questions.map(q => (
        <div
          key={q.id}
          className={`p-3 my-3 rounded ${
            q.selectedAnswer === q.correctAnswer ? 'bg-success bg-opacity-25' : 'bg-danger bg-opacity-25'
          }`}
        >
          <p><strong>Q{q.id}. {q.question}</strong></p>
          {q.options.map(opt => (
            <div key={opt}>
              <input type="radio" checked={q.selectedAnswer === opt} readOnly /> {opt}
            </div>
          ))}
          <div className="mt-2 border rounded p-2 bg-light">
           Right answer is: <strong>{q.correctAnswer}</strong>
          </div>
        </div>
      ))}

      {/* 3 Nút ở góc dưới trái */}
      <div className="d-flex gap-2 position-fixed bottom-0 start-0 m-3">
        <button className="btn btn-info" onClick={() => navigate('/quizzes')}>Quiz</button>
        <button className="btn btn-info" onClick={() => navigate('/quiz/review')}>Quiz Review</button>
        <button className="btn btn-info" onClick={() => navigate('/quiz/result')}>Submit</button>
      </div>
    </div>
  );
};

export default QuizResult;