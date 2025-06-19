import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';

const questionList = [
  {
    text: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correct: 'Paris',
  },
  {
    text: 'What is the largest planet in our solar system?',
    options: ['Jupiter', 'Saturn', 'Mars', 'Earth'],
    correct: 'Jupiter',
  }
];

function QuizApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleSelectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (selectedAnswer === questionList[currentIndex].correct) {
      setScore(score + 1);
    }

    if (currentIndex + 1 < questionList.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer('');
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer('');
    setIsFinished(false);
  };

  return (
    <div>
      <h1>Quiz App</h1>
      {isFinished ? (
        <Score score={score} total={questionList.length} onRestart={handleRestart} />
      ) : (
        <Question
          question={questionList[currentIndex]}
          questionNumber={currentIndex + 1}
          selected={selectedAnswer}
          onSelect={handleSelectAnswer}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default QuizApp;
