import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { goToQuestion, resetQuiz } from '../redux/quizSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuizReview = () => {
  const { questions, showResult } = useSelector(state => state.quiz); // ✅ Lấy showResult
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container mt-3">
      {/* Banner đen trắng */}
      <h1 className="bg-dark text-white text-center py-3">Quiz Review</h1>

      {/* Câu hỏi đã trả lời */}
      <div className="d-flex flex-wrap gap-3 my-4">
        {questions.map((q, index) => (
          <div
            key={q.id}
            className={`p-3 text-center rounded ${
              q.selectedAnswer ? 'bg-success' : 'bg-secondary'
            } bg-opacity-25`}
            style={{ width: '120px', cursor: 'pointer' }}
            onClick={() => {
              dispatch(goToQuestion(index));
              navigate('/quizzes');
            }}
          >
            <div><strong>Question No {q.id}</strong></div>
            <div>{q.selectedAnswer ? 'Answered' : 'Unanswered'}</div>
          </div>
        ))}
      </div>

      <div className="d-flex gap-2 position-fixed bottom-0 start-0 m-3">
        <button className="btn btn-info" onClick={() => navigate('/quizzes')}>Quiz</button>
        <button className="btn btn-info" onClick={() => navigate('/quiz/review')}>Quiz Review</button>

        {!showResult ? (
          <button className="btn btn-info" onClick={() => navigate('/quiz/result')}>Submit</button>
        ) : (
          <button
            className="btn btn-warning"
            onClick={() => {
              dispatch(resetQuiz());
              navigate('/quizzes');
            }}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizReview;