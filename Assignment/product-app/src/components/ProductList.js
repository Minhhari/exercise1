"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap"
import AddProduct from "./AddProduct"

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [viewMode, setViewMode] = useState("grid")

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
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
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

      setProducts(products)
      setError(null)
    } catch (err) {
      setError("Không thể tải danh sách sản phẩm. Vui lòng thử lại!")
      console.error("Error fetching products:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleAddProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct]
    setProducts(updatedProducts)
    saveProductsData(updatedProducts)
  }

  const handleDeleteProduct = async (productId) => {
    try {
      const updatedProducts = products.filter((product) => product.id !== productId)
      setProducts(updatedProducts)
      saveProductsData(updatedProducts)
    } catch (err) {
      setError("Không thể xóa sản phẩm. Vui lòng thử lại!")
      console.error("Error deleting product:", err)
    }
  }

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VNĐ"
  }

  if (loading) {
    return (
      <div style={{ backgroundColor: "#495057", minHeight: "100vh", color: "white", padding: "50px 0" }}>
        <Container>
          <div className="text-center">
            <h3>Đang tải danh sách sản phẩm...</h3>
          </div>
        </Container>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ backgroundColor: "#495057", minHeight: "100vh", color: "white", padding: "50px 0" }}>
        <Container>
          <div className="text-center">
            <div className="alert alert-danger">{error}</div>
            <Button onClick={fetchProducts} variant="primary">
              Thử lại
            </Button>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: "#495057", minHeight: "100vh", color: "white" }}>
      <Container className="py-4">
        <Row className="mb-4">
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Button
                  variant={viewMode === "grid" ? "primary" : "outline-light"}
                  className="me-2"
                  onClick={() => setViewMode("grid")}
                >
                  Grid View
                </Button>
                <Button
                  variant={viewMode === "table" ? "primary" : "outline-light"}
                  onClick={() => setViewMode("table")}
                >
                  Table View
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        <AddProduct onAddProduct={handleAddProduct} />

        {products.length === 0 ? (
          <div className="text-center py-5">
            <h3>Product List</h3>
            <p style={{ color: "#adb5bd", fontSize: "1.2rem" }}>No products found.</p>
          </div>
        ) : viewMode === "grid" ? (
          <Row>
            {products.map((product) => (
              <Col key={product.id} lg={3} md={4} sm={6} className="mb-4">
                <Card style={{ backgroundColor: "white", color: "#333", height: "100%" }}>
                  <div
                    style={{
                      height: "200px",
                      overflow: "hidden",
                      backgroundColor: "#f8f9fa",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={`/images/${product.image}`}
                      alt={product.name}
                      style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                      onError={(e) => {
                        e.target.src = "/images/default-laptop.png"
                      }}
                    />
                  </div>

                  <Card.Body className="d-flex flex-column">
                    <h5 style={{ color: "#dc3545", fontWeight: "bold", marginBottom: "10px" }}>{product.name}</h5>
                    <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "15px", flexGrow: 1 }}>
                      {product.description}
                    </p>

                    <div style={{ marginBottom: "15px" }}>
                      <span
                        style={{
                          textDecoration: "line-through",
                          color: "#6c757d",
                          fontSize: "0.9rem",
                          marginRight: "10px",
                        }}
                      >
                        {formatPrice(product.price)}
                      </span>
                      <span style={{ color: "#dc3545", fontWeight: "bold", fontSize: "1.1rem" }}>
                        {formatPrice(product.currentPrice)}
                      </span>
                    </div>

                    <div className="d-grid gap-2">
                      <Link to={`/product/${product.id}`} className="btn btn-danger btn-sm">
                        Xem chi tiết
                      </Link>
                      <Button onClick={() => handleDeleteProduct(product.id)} variant="outline-danger" size="sm">
                        Xóa
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Table striped bordered hover variant="dark" responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Current Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{formatPrice(product.price)}</td>
                  <td>{formatPrice(product.currentPrice)}</td>
                  <td>
                    <Button variant="danger" size="sm" className="me-1" onClick={() => handleDeleteProduct(product.id)}>
                      Delete
                    </Button>
                    <Link to={`/product/${product.id}/edit`} className="btn btn-warning btn-sm">
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </div>
  )
}

export default ProductList
