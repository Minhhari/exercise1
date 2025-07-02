import React from 'react';
import { Card, Form } from 'react-bootstrap';

function Question({ data, selectedAnswer, onAnswerChange }) {
  return (
    <Card className="mb-4 shadow-sm border-0">
      <Card.Header className="bg-light">
        <h5 className="mb-0 text-primary">
          Question {data.id}: {data.question}
        </h5>
      </Card.Header>
      <Card.Body>
        <Form>
          {data.options.map((opt, i) => (
            <Form.Check
              key={i}
              type="radio"
              name={`question-${data.id}`}
              id={`option-${data.id}-${i}`}
              label={opt}
              value={opt}
              checked={selectedAnswer === opt}
              onChange={() => onAnswerChange(data.id, opt)}
              className="mb-2 p-2 rounded hover-option"
              style={{
                transition: 'background-color 0.2s ease',
                cursor: 'pointer'
              }}
            />
          ))}
        </Form>
      </Card.Body>
      
      <style jsx>{`
        .hover-option:hover {
          background-color: #f8f9fa !important;
        }
        .form-check-input:checked ~ .form-check-label {
          color: #0d6efd;
          font-weight: 500;
        }
      `}</style>
    </Card>
  );
}

export default Question;