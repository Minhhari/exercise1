// src/components/AddQuestion.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion } from '../redux/quizSlice';
import { useNavigate } from 'react-router-dom';

const AddQuestion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const questions = useSelector(state => state.quiz.questions);

  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!questionText.trim()) {
      alert('Please enter the question.');
      return;
    }
    if (options.some(opt => !opt.trim())) {
      alert('Please fill all answer options.');
      return;
    }
    if (!correctAnswer) {
      alert('Please select the correct answer.');
      return;
    }

    // Create new question with unique id
    const newQuestion = {
      id: questions.length ? questions[questions.length - 1].id + 1 : 1,
      question: questionText,
      options: options,
      correctAnswer: correctAnswer,
      selectedAnswer: null,
    };

    dispatch(addQuestion(newQuestion));

    // Reset form
    setQuestionText('');
    setOptions(['', '', '', '']);
    setCorrectAnswer('');

    // Navigate back to Quiz page to see updated list
    navigate('/quizzes');
  };

  return (
    <div className="container mt-3">
      <h1 className="bg-dark text-white text-center py-3">Add New Question</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Question:</label>
          <input
            type="text"
            className="form-control"
            value={questionText}
            onChange={e => setQuestionText(e.target.value)}
            placeholder="Enter question"
          />
        </div>

        {options.map((opt, idx) => (
          <div key={idx} className="mb-3">
            <label className="form-label">Option {idx + 1}:</label>
            <input
              type="text"
              className="form-control"
              value={opt}
              onChange={e => handleOptionChange(idx, e.target.value)}
              placeholder={`Option ${idx + 1}`}
            />
          </div>
        ))}

        <div className="mb-3">
          <label className="form-label">Correct Answer:</label>
          <select
            className="form-select"
            value={correctAnswer}
            onChange={e => setCorrectAnswer(e.target.value)}
          >
            <option value="">-- Select correct answer --</option>
            {options.map((opt, idx) => (
              <option key={idx} value={opt}>
                {opt || `Option ${idx + 1}`}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Add Question</button>
      </form>
    </div>
  );
};

export default AddQuestion;