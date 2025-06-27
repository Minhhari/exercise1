import React, { useReducer, useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

// Trạng thái ban đầu của form
const initialState = {
  name: "",
  email: "",
  password: "",
  isSubmitted: false,
};

// useReducer handler
const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SUBMIT":
      return { ...state, isSubmitted: true };
    default:
      return state;
  }
};

const MyForm = ({ title, onSubmit }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!state.name.trim()) newErrors.name = "Tên không được để trống!";
    if (!state.email.trim()) newErrors.email = "Email không được để trống!";
    if (!state.password.trim())
      newErrors.password = "Mật khẩu không được để trống!";

    setErrors(newErrors);
    setShowAlert(Object.keys(newErrors).length > 0);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch({ type: "SUBMIT" });
      onSubmit(state); // Truyền dữ liệu ra App
      alert("Gửi thành công!");
    }
  };

  return (
    <Container className="mt-4">
      <h3>{title}</h3>

      {showAlert && (
        <Alert variant="danger">Vui lòng điền đầy đủ thông tin hợp lệ.</Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Gửi
        </Button>
      </Form>
    </Container>
  );
};

MyForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MyForm;
