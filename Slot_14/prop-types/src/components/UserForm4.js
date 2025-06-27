import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

const UserForm4 = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Tên không được để trống";
    } else if (formData.name.length < 3 || formData.name.length > 50) {
      newErrors.name = "Tên phải từ 3 đến 50 ký tự";
    }

    // Validate age
    const age = parseInt(formData.age, 10);
    if (!formData.age) {
      newErrors.age = "Tuổi không được để trống";
    } else if (isNaN(age) || age < 18 || age > 100) {
      newErrors.age = "Tuổi phải từ 18 đến 100";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email không được để trống";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email không đúng định dạng";
    }

    // Validate phone
    const phoneRegex = /^\d{10,15}$/;
    if (!formData.phone) {
      newErrors.phone = "Số điện thoại không được để trống";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Số điện thoại phải từ 10 đến 15 chữ số";
    }

    // Validate agreement
    if (!formData.agree) {
      newErrors.agree = "Bạn phải đồng ý với điều khoản";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (validate()) {
      onSubmit(formData);
      alert("Gửi thành công!");
    }
  };

  return (
    <Container className="mt-4">
      {submitted && Object.keys(errors).length > 0 && (
        <Alert variant="danger">Vui lòng sửa các lỗi bên dưới!</Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">
            {errors.age}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Tôi đồng ý với điều khoản"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            isInvalid={!!errors.agree}
            feedback={errors.agree}
            feedbackType="invalid"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Gửi
        </Button>
      </Form>
    </Container>
  );
};

UserForm4.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UserForm4;