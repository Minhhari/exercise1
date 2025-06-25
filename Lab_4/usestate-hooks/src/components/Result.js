import React from 'react';
import { Button } from 'react-bootstrap';

const Result = ({ score, total, onReplay }) => {
  const handleShare = () => {
    const resultText = `My score: ${score}/${total}`;
    navigator.clipboard.writeText(resultText).then(() => {
      alert('The result has been copied: ' + resultText);
    });
  };

  return (
    <div className="text-center">
      <h3>Result</h3>
      <p>Your score: <strong>{score} / {total}</strong></p>
      <p>{score === total ? 'Great!' : 'Try harder!'}</p>
      <Button variant="success" onClick={onReplay} className="me-2 mt-3">
        Replay
      </Button>
      <Button variant="info" onClick={handleShare} className="mt-3">
        Share
      </Button>
    </div>
  );
};

export default Result;
