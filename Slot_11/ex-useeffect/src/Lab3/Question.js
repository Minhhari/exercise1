import React from 'react';

function Question({ question, questionNumber, selected, onSelect, onSubmit }) {
  return (
    <div>
      <h2>Question {questionNumber}</h2>
      <p>{question.text}</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {question.options.map((option, index) => (
          <li key={index} style={{ marginBottom: '8px' }}>
            <button
              onClick={() => onSelect(option)}
              style={{
                backgroundColor: selected === option ? '#d1e7dd' : '#f8f9fa',
                padding: '8px 12px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                cursor: 'pointer',
                width: '100%',
                textAlign: 'left'
              }}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={onSubmit} disabled={!selected}>Submit</button>
    </div>
  );
}

export default Question;
