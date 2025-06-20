import React, { useReducer, useState, useEffect } from "react";
import { Button, Container, Card, Row, Col, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  feedback: null,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload, feedback: null };
    case "NEXT_QUESTION":
      const isCorrect = state.selectedOption === state.questions[state.currentQuestion].answer;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        feedback: isCorrect
          ? { correct: true, message: "Correct! 🎉" }
          : {
              correct: false,
              message: `Incorrect! The correct answer is ${state.questions[state.currentQuestion].answer}`,
            },
        showScore: state.currentQuestion + 1 === state.questions.length,
      };
    case "RESTART_QUIZ":
      return { ...initialState };
    default:
      return state;
  }
}

function QuestionBanks() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore, feedback } = state;
  const [timeLeft, setTimeLeft] = useState(10);
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem("highScore") || "0", 10);
  });

  // Timer logic
  useEffect(() => {
    if (showScore || !selectedOption) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          dispatch({ type: "NEXT_QUESTION" });
          return 10;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [showScore, currentQuestion, selectedOption]);

  // Update high score
  useEffect(() => {
    if (showScore && score > highScore) {
      setHighScore(score);
      localStorage.setItem("highScore", score.toString());
    }
  }, [showScore, score, highScore]);

  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
    setTimeLeft(10);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8} lg={6} className="mx-auto">
          <Card className="p-4">
            {showScore ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
                <p className="text-lg mb-2">
                  Your Score: <span className="text-blue-600 font-semibold">{score}</span> / {questions.length}
                </p>
                <p className="text-lg mb-2">
                  High Score: <span className="text-green-600 font-semibold">{highScore}</span>
                </p>
                <Button variant="primary" onClick={handleRestartQuiz} className="mt-4">
                  Restart Quiz
                </Button>
              </div>
            ) : (
              <div>
                {/* Progress Display */}
                <div className="mb-4">
                  <ProgressBar
                    now={(currentQuestion + 1) / questions.length * 100}
                    label={`${currentQuestion + 1}/${questions.length}`}
                    className="mb-2"
                  />
                </div>

                {/* Question */}
                <h4 className="text-xl font-bold mb-4">
                  Question {questions[currentQuestion].id}:<br />
                  {questions[currentQuestion].question}
                </h4>

                {/* Options */}
                <div className="mb-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant={selectedOption === option ? "success" : "outline-secondary"}
                      className="m-2"
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>

                {/* Timer */}
                <div
                  className={`text-center mb-4 font-semibold ${
                    timeLeft < 5 ? "text-red-500" : "text-gray-700"
                  }`}
                >
                  Time Left: {timeLeft}s
                </div>

                {/* Feedback */}
                {feedback && (
                  <div
                    className={`text-center mb-4 ${
                      feedback.correct ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {feedback.correct ? (
                      <FaCheckCircle className="inline mr-2" />
                    ) : (
                      <FaTimesCircle className="inline mr-2" />
                    )}
                    {feedback.message}
                  </div>
                )}

                {/* Next Button */}
                <Button
                  variant="primary"
                  className="mt-3 w-100"
                  disabled={!selectedOption}
                  onClick={handleNextQuestion}
                >
                  {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
                </Button>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default QuestionBanks;