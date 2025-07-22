
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAnswer, nextQuestion, prevQuestion, goToQuestion, submitQuiz, resetQuiz } from '../redux/quizSlice';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const { questions, currentQuestionIndex, showResult } = useSelector(state => state.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const question = questions[currentQuestionIndex];

  const handleSelectAnswer = (opt) => {
    if (!showResult) {
      dispatch(selectAnswer({ questionId: question.id, answer: opt }));
    }
  };

  const handleSubmit = () => {
    dispatch(submitQuiz());
    navigate('/quiz/result');
  };

  const handleReset = () => {
    dispatch(resetQuiz());
  };

  return (
    <div className="container mt-3">
    
      <h1 className="bg-dark text-white text-center py-3">JavaScript Quiz</h1> 

      <div className="mb-3 mt-4">
        <strong>Q.{question.id} {question.question}</strong>
      </div>

      <div className="row">
       {question.options.map((opt, idx) => ( /* Hiện question và answer  */
  <div key={idx} className="col-md-6 mb-2">
    <div
      className="p-2 rounded bg-primary bg-opacity-25"
      style={{ cursor: showResult ? 'default' : 'pointer' }}
      onClick={() => handleSelectAnswer(opt)}
    >
      <input
        type="radio"
        name={`question-${question.id}`}
        checked={question.selectedAnswer === opt}
        onChange={() => handleSelectAnswer(opt)}
        disabled={showResult}
        className="form-check-input me-2"
      />
      {opt}
    </div>
  </div>
))}


      </div>
       {/* Đây là phần điều hướng câu hỏi  */}
      <div className="d-flex justify-content-center my-3"> 
        <button
          className="btn btn-primary me-2"
          onClick={() => dispatch(goToQuestion(0))}
          disabled={currentQuestionIndex === 0}
        >
          First
        </button>
        <button
          className="btn btn-primary me-2"
          onClick={() => dispatch(prevQuestion())}
          disabled={currentQuestionIndex === 0}
        >
          Prev
        </button>
        <button
          className="btn btn-primary me-2"
          onClick={() => dispatch(nextQuestion())}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          Next
        </button>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(goToQuestion(questions.length - 1))}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          Last
        </button>
      </div>
        {/* Đây là các button ở góc trái bên dưới  */}
      <div className="d-flex gap-2 position-fixed bottom-0 start-0 m-3">
        <button className="btn btn-info" onClick={() => navigate('/quizzes')}>Quiz</button>
        <button className="btn btn-info" onClick={() => navigate('/quiz/review')}>Quiz Review</button>
         <button className="btn btn-info" onClick={() => navigate('/quiz/add')}>Add Question</button>

        {!showResult ? (
          <button className="btn btn-info" onClick={handleSubmit}>Submit</button>
        ) : (
          <button className="btn btn-warning" onClick={handleReset}>Reset</button>
        )}
      </div>
    </div>
  );
};

export default Quiz;