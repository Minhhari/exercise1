"use client"

import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { Container, Row, Col, Breadcrumb } from "react-bootstrap"

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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
    fetchProductDetail()
  }, [id])

  const fetchProductDetail = async () => {
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

      const foundProduct = products.find((p) => p.id === id)

      if (foundProduct) {
        setProduct(foundProduct)
        setError(null)
      } else {
        setError("Không tìm thấy sản phẩm!")
      }
    } catch (err) {
      setError("Không thể tải thông tin sản phẩm. Vui lòng thử lại!")
      console.error("Error fetching product detail:", err)
    } finally {
      setLoading(false)
    }
  }

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VNĐ"
  }

  const calculateDiscount = (originalPrice, currentPrice) => {
    const original = Number.parseFloat(originalPrice.replace(/\./g, ""))
    const current = Number.parseFloat(currentPrice.replace(/\./g, ""))
    const discount = (((original - current) / original) * 100).toFixed(0)
    return discount
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

  if (error) {
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

  if (!product) {
    return (
      <div style={{ backgroundColor: "#495057", minHeight: "100vh", color: "white", padding: "50px 0" }}>
        <Container>
          <div className="text-center">
            <div className="alert alert-danger">Không tìm thấy sản phẩm!</div>
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
          <Breadcrumb.Item active style={{ color: "#adb5bd" }}>
            Chi tiết sản phẩm
          </Breadcrumb.Item>
        </Breadcrumb>

        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center" style={{ padding: "30px" }}>
              <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>{product.name}</h1>

              <div
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                  display: "inline-block",
                }}
              >
                <img
                  src={`/images/${product.image}`}
                  alt={product.name}
                  style={{ maxWidth: "300px", maxHeight: "200px", objectFit: "contain" }}
                  onError={(e) => {
                    e.target.src = "/images/default-laptop.png"
                  }}
                />
              </div>

              <p style={{ fontSize: "1.1rem", marginBottom: "20px", lineHeight: "1.6" }}>{product.description}</p>

              <div style={{ margin: "20px 0" }}>
                <div style={{ marginBottom: "10px" }}>
                  <span style={{ fontSize: "1.2rem" }}>Price: {formatPrice(product.price)}</span>
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                    Current Price: {formatPrice(product.currentPrice)}
                  </span>
                </div>
              </div>

              <div style={{ fontSize: "1.2rem", margin: "15px 0" }}>
                <span>Discount: {calculateDiscount(product.price, product.currentPrice)} %</span>
              </div>

              <div className="mt-4">
                <Link to="/" className="btn btn-primary me-3">
                  Back Home
                </Link>
                <Link to={`/product/${product.id}/edit`} className="btn btn-danger">
                  Edit
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetail
