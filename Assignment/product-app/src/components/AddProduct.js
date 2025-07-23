"use client"

import { useState } from "react"
import { Modal, Form, Button, Row, Col } from "react-bootstrap"

const AddProduct = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    currentPrice: "",
    image: "",
  })

  const [showForm, setShowForm] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.description && formData.price && formData.currentPrice) {
      const newProduct = {
        id: Date.now().toString(),
        ...formData,
        image: formData.image || "laptop1.png",
      }
      onAddProduct(newProduct)
      setFormData({
        name: "",
        description: "",
        price: "",
        currentPrice: "",
        image: "",
      })
      setShowForm(false)
    }
  }

  return (
    <>
      <div className="d-flex justify-content-end mb-4">
        <Button variant="success" onClick={() => setShowForm(true)}>
          Add Product
        </Button>
      </div>

      <Modal show={showForm} onHide={() => setShowForm(false)} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "#495057", color: "white" }}>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#495057" }}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={12} className="mb-3">
                <Form.Label style={{ color: "white", fontWeight: "500" }}>Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: "white", color: "#333" }}
                />
              </Col>

              <Col md={12} className="mb-3">
                <Form.Label style={{ color: "white", fontWeight: "500" }}>Description:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: "white", color: "#333" }}
                />
              </Col>

              <Col md={6} className="mb-3">
                <Form.Label style={{ color: "white", fontWeight: "500" }}>Price:</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: "white", color: "#333" }}
                />
              </Col>

              <Col md={6} className="mb-3">
                <Form.Label style={{ color: "white", fontWeight: "500" }}>Current Price:</Form.Label>
                <Form.Control
                  type="text"
                  name="currentPrice"
                  value={formData.currentPrice}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: "white", color: "#333" }}
                />
              </Col>

              <Col md={12} className="mb-3">
                <Form.Label style={{ color: "white", fontWeight: "500" }}>Image:</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="Image filename (optional)"
                  style={{ backgroundColor: "white", color: "#333" }}
                />
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#495057" }}>
          <Button variant="secondary" onClick={() => setShowForm(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddProduct
