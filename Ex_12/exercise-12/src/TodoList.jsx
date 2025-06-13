import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Form.Control
        type="text"
        placeholder="New todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button className="mt-2 mb-3" onClick={addTodo}>
        Add
      </Button>
      <ListGroup>
        {todos.map((todo, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between">
            {todo}
            <Button variant="danger" size="sm" onClick={() => deleteTodo(index)}>
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;
