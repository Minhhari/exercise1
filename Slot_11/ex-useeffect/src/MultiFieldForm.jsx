
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

function MultiFieldForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [accepted, setAccepted] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(
      name.trim().length > 0 &&
      gender !== "" &&
      country !== "" &&
      accepted
    );
  }, [name, gender, country, accepted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <Form className="p-4" onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Họ và tên</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nhập tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Giới tính</Form.Label>
        <div>
          <Form.Check
            inline
            label="Nam"
            type="radio"
            name="gender"
            value="nam"
            checked={gender === "nam"}
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
            inline
            label="Nữ"
            type="radio"
            name="gender"
            value="nu"
            checked={gender === "nu"}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
      </Form.Group>

      <Form.Group controlId="formCountry" className="mt-3">
        <Form.Label>Quốc gia</Form.Label>
        <Form.Select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">-- Chọn quốc gia --</option>
          <option value="vn">Việt Nam</option>
          <option value="us">Mỹ</option>
          <option value="jp">Nhật Bản</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mt-3" controlId="formCheckbox">
        <Form.Check
          type="checkbox"
          label="Tôi đồng ý với điều khoản"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
        />
      </Form.Group>

      <Button
        className="mt-3"
        type="submit"
        disabled={!isFormValid}
        variant="success"
      >
        Gửi Form
      </Button>
    </Form>
  );
}

export default MultiFieldForm;