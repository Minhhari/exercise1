import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ToggleVisibility = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="text-center">
      {visible && <p>This is some text!</p>}
      <Button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'}
      </Button>
    </div>
  );
};

export default ToggleVisibility;
