
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isValidPassword = (password) =>
  password.length >= 8;

function LoginFormValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const [formTouched, setFormTouched] = useState(false);

  useEffect(() => {
    if (formTouched) {
      setEmailValid(isValidEmail(email));
      setPasswordValid(isValidPassword(password));
    }
  }, [email, password, formTouched]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormTouched(true);
  };

  return (
    <Form className="p-4" onSubmit={handleSubmit}>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={formTouched && !emailValid}
        />
        <Form.Control.Feedback type="invalid">
          Email không hợp lệ
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPassword" className="mt-3">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={formTouched && !passwordValid}
        />
        <Form.Control.Feedback type="invalid">
          Mật khẩu phải có ít nhất 8 ký tự
        </Form.Control.Feedback>
      </Form.Group>

      <Button
        className="mt-3"
        variant="primary"
        type="submit"
        disabled={!emailValid || !passwordValid}
      >
        Submit
      </Button>
    </Form>
  );
}

export default LoginFormValidation;
