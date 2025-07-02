import React, { useState } from 'react';
import { Container, Card, Button, Alert, Badge, Row, Col, ProgressBar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Question from './Question';

const questions = [
  { 
    id: 1, 
    question: "What's the capital of France?", 
    options: ["Paris", "London", "Rome", "Madrid"], 
    correctAnswer: "Paris" 
  },
  { 
    id: 2, 
    question: "What is the result of 3 + 5?", 
    options: ["5", "8", "10", "15"], 
    correctAnswer: "8" 
  },
  { 
    id: 3, 
    question: "Which language is used for web development?", 
    options: ["Python", "JavaScript", "C#", "C++"], 
    correctAnswer: "JavaScript" 
  },
  { 
    id: 4, 
    question: "What does HTML stand for?", 
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"], 
    correctAnswer: "Hyper Text Markup Language" 
  },
  { 
    id: 5, 
    question: "Which company developed React?", 
    options: ["Google", "Microsoft", "Facebook", "Apple"], 
    correctAnswer: "Facebook" 
  }
];

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleAnswerChange = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleRetake = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) score++;
    });
    return score;
  };

  const getAnsweredCount = () => {
    return Object.keys(answers).length;
  };

  const getScoreColor = () => {
    const score = calculateScore();
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'success';
    if (percentage >= 60) return 'warning';
    return 'danger';
  };

  const progress = (getAnsweredCount() / questions.length) * 100;

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col lg={8}>
          {!submitted ? (
            <Card className="shadow-sm border-0">
              <Card.Header className="bg-primary text-white">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="mb-0">Knowledge Quiz</h2>
                  <Badge bg="light" text="dark">
                    {getAnsweredCount()}/{questions.length} answered
                  </Badge>
                </div>
                <ProgressBar 
                  now={progress} 
                  className="mt-2"
                  variant="info"
                  style={{ height: '6px' }}
                />
              </Card.Header>
              <Card.Body className="p-4">
                <p className="text-muted mb-4">
                  Test your knowledge with these questions. Select the best answer for each question.
                </p>
                
                {questions.map((q) => (
                  <Question
                    key={q.id}
                    data={q}
                    selectedAnswer={answers[q.id]}
                    onAnswerChange={handleAnswerChange}
                  />
                ))}
                
                <div className="d-grid">
                  <Button 
                    variant="primary" 
                    size="lg"
                    onClick={handleSubmit}
                    disabled={getAnsweredCount() < questions.length}
                  >
                    {getAnsweredCount() < questions.length 
                      ? `Answer ${questions.length - getAnsweredCount()} more questions`
                      : 'Submit Quiz'
                    }
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ) : (
            <Card className="shadow-sm border-0">
              <Card.Header className={`bg-${getScoreColor()} text-white`}>
                <h2 className="mb-0">Quiz Results</h2>
              </Card.Header>
              <Card.Body className="p-4">
                <Alert variant={getScoreColor()} className="text-center mb-4">
                  <Alert.Heading>
                    Your Score: {calculateScore()} / {questions.length}
                  </Alert.Heading>
                  <p className="mb-0">
                    {calculateScore() === questions.length 
                      ? "Perfect! Excellent work! 🎉"
                      : calculateScore() >= questions.length * 0.8
                      ? "Great job! Well done! 👏"
                      : calculateScore() >= questions.length * 0.6
                      ? "Good effort! Keep learning! 👍"
                      : "Keep practicing! You'll improve! 💪"
                    }
                  </p>
                </Alert>

                <h4 className="mb-3">Detailed Results:</h4>
                {questions.map((q) => (
                  <Card key={q.id} className="mb-3 border-0 bg-light">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h6 className="mb-1">Question {q.id}: {q.question}</h6>
                        <Badge 
                          bg={answers[q.id] === q.correctAnswer ? 'success' : 'danger'}
                        >
                          {answers[q.id] === q.correctAnswer ? 'Correct' : 'Wrong'}
                        </Badge>
                      </div>
                      <p className="mb-1">
                        <strong>Your answer:</strong> 
                        <span className={answers[q.id] === q.correctAnswer ? 'text-success' : 'text-danger'}>
                          {' '}{answers[q.id] || 'Not answered'}
                        </span>
                      </p>
                      {answers[q.id] !== q.correctAnswer && (
                        <p className="mb-0 text-success">
                          <strong>Correct answer:</strong> {q.correctAnswer}
                        </p>
                      )}
                    </Card.Body>
                  </Card>
                ))}

                <div className="text-center mt-4">
                  <Button 
                    variant="primary" 
                    size="lg"
                    onClick={handleRetake}
                    className="me-2"
                  >
                    Take Quiz Again
                  </Button>
                  <Button 
                    variant="outline-secondary" 
                    size="lg"
                    onClick={() => navigate('/')}
                  >
                    Back to Home
                  </Button>
                </div>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Quiz;