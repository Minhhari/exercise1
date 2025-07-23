"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { Container, Row, Col, Form, Button, Breadcrumb } from "react-bootstrap"

const EditProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    currentPrice: "",
    image: "",
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [updating, setUpdating] = useState(false)
  const [discount, setDiscount] = useState(0)

  const calculateDiscount = (originalPrice, currentPrice) => {
    if (!originalPrice || !currentPrice) return 0
    const original = Number.parseFloat(originalPrice.replace(/\./g, ""))
    const current = Number.parseFloat(currentPrice.replace(/\./g, ""))
    if (original <= 0) return 0
    const discountPercent = (((original - current) / original) * 100).toFixed(0)
    return discountPercent
  }

  // Lấy dữ liệu sản phẩm từ localStorage hoặc file JSON
  const getProductsData = () => {
    const savedProducts = localStorage.getItem("products")
    if (savedProducts) {
      return JSON.parse(savedProducts)
    }
    return null
  }

  // Lưu dữ liệu sản phẩm vào localStorage
  const saveProductsData = (products) => {
    localStorage.setItem("products", JSON.stringify(products))
  }

  useEffect(() => {
    fetchProductData()
  }, [id])

  useEffect(() => {
    const discountPercent = calculateDiscount(formData.price, formData.currentPrice)
    setDiscount(discountPercent)
  }, [formData.price, formData.currentPrice])

  const fetchProductData = async () => {
    try {
      setLoading(true)

      // Kiểm tra localStorage trước
      let products = getProductsData()

      // Nếu không có trong localStorage, load từ file JSON
      if (!products) {
        const response = await import("../data/products.json")
        products = response.products
        saveProductsData(products)
      }

      const product = products.find((p) => p.id === id)

      if (product) {
        setFormData({
          name: product.name,
          description: product.description,
          price: product.price,
          currentPrice: product.currentPrice,
          image: product.image,
        })
        setError(null)
      } else {
        setError("Không tìm thấy sản phẩm!")
      }
    } catch (err) {
      setError("Không thể tải thông tin sản phẩm. Vui lòng thử lại!")
      console.error("Error fetching product:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const newFormData = {
      ...formData,
      [name]: value,
    }
    setFormData(newFormData)

    // Tự động tính discount khi thay đổi price hoặc currentPrice
    if (name === "price" || name === "currentPrice") {
      const discountPercent = calculateDiscount(
        name === "price" ? value : newFormData.price,
        name === "currentPrice" ? value : newFormData.currentPrice,
      )
      setDiscount(discountPercent)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.description || !formData.price || !formData.currentPrice) {
      setError("Vui lòng điền đầy đủ thông tin!")
      return
    }

    try {
      setUpdating(true)
      setError(null)

      // Lấy danh sách sản phẩm hiện tại
      let products = getProductsData()

      if (!products) {
        const response = await import("../data/products.json")
        products = response.products
      }

      // Cập nhật sản phẩm
      const updatedProducts = products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            name: formData.name,
            description: formData.description,
            price: formData.price,
            currentPrice: formData.currentPrice,
            image: formData.image,
          }
        }
        return product
      })

      // Lưu vào localStorage
      saveProductsData(updatedProducts)

      // Mô phỏng API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      navigate(`/product/${id}`)
    } catch (err) {
      setError("Không thể cập nhật sản phẩm. Vui lòng thử lại!")
      console.error("Error updating product:", err)
    } finally {
      setUpdating(false)
    }
  }

  if (loading) {
    return (
      <div style={{ backgroundColor: "#495057", minHeight: "100vh", color: "white", padding: "50px 0" }}>
        <Container>
          <div className="text-center">
            <h3>Đang tải thông tin sản phẩm...</h3>
          </div>
        </Container>
      </div>
    )
  }

  if (error && !formData.name) {
    return (
      <div style={{ backgroundColor: "#495057", minHeight: "100vh", color: "white", padding: "50px 0" }}>
        <Container>
          <div className="text-center">
            <div className="alert alert-danger">{error}</div>
            <Link to="/" className="btn btn-primary">
              Quay về trang chủ
            </Link>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: "#495057", minHeight: "100vh", color: "white", padding: "30px 0" }}>
      <Container>
        <Breadcrumb style={{ backgroundColor: "transparent", padding: 0, marginBottom: "20px" }}>
          <Breadcrumb.Item>
            <Link to="/" style={{ color: "#007bff", textDecoration: "none" }}>
              Trang chủ
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/product/${id}`} style={{ color: "#007bff", textDecoration: "none" }}>
              Chi tiết sản phẩm
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active style={{ color: "#adb5bd" }}>
            Chỉnh sửa
          </Breadcrumb.Item>
        </Breadcrumb>

        <Row className="justify-content-center">
          <Col lg={8}>
            <div style={{ backgroundColor: "#495057", padding: "30px", borderRadius: "8px" }}>
              <h2 className="text-center mb-4" style={{ color: "white" }}>
                Edit Product
              </h2>

              {error && <div className="alert alert-danger">{error}</div>}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Label style={{ color: "white", fontWeight: "500", marginBottom: "8px" }}>Name:</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={updating}
                      style={{ backgroundColor: "white", border: "1px solid #ced4da", color: "#333" }}
                    />
                  </Col>

                  <Col md={12} className="mb-3">
                    <Form.Label style={{ color: "white", fontWeight: "500", marginBottom: "8px" }}>
                      Description:
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      disabled={updating}
                      style={{ backgroundColor: "white", border: "1px solid #ced4da", color: "#333" }}
                    />
                  </Col>

                  <Col md={6} className="mb-3">
                    <Form.Label style={{ color: "white", fontWeight: "500", marginBottom: "8px" }}>Price:</Form.Label>
                    <Form.Control
                      type="text"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      required
                      disabled={updating}
                      style={{ backgroundColor: "white", border: "1px solid #ced4da", color: "#333" }}
                    />
                  </Col>

                  <Col md={6} className="mb-3">
                    <Form.Label style={{ color: "white", fontWeight: "500", marginBottom: "8px" }}>
                      Current Price:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="currentPrice"
                      value={formData.currentPrice}
                      onChange={handleChange}
                      required
                      disabled={updating}
                      style={{ backgroundColor: "white", border: "1px solid #ced4da", color: "#333" }}
                    />
                  </Col>

                  <Col md={12} className="mb-3">
                    <div
                      style={{
                        backgroundColor: "#6c757d",
                        padding: "10px",
                        borderRadius: "5px",
                        textAlign: "center",
                      }}
                    >
                      <strong style={{ color: "white", fontSize: "1.1rem" }}>Discount: {discount}%</strong>
                    </div>
                  </Col>
                </Row>

                <div className="text-center mt-4">
                  <Link to="/" className="btn btn-primary me-3" disabled={updating}>
                    Back Home
                  </Link>
                  <Button type="submit" variant="danger" disabled={updating}>
                    {updating ? "Đang cập nhật..." : "Save Product"}
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default EditProduct
