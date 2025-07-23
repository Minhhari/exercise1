import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductList from "./components/ProductList"
import ProductDetail from "./components/ProductDetail"
import EditProduct from "./components/EditProduct"

function App() {
  return (
    <Router>
      <div className="App">
        <header
          style={{
            backgroundColor: "#495057",
            padding: "20px 0",
            textAlign: "center",
            borderBottom: "1px solid #6c757d",
          }}
        >
          <h1 style={{ color: "white", margin: 0, fontSize: "2rem", fontWeight: "bold" }}>Product List</h1>
        </header>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/product/:id/edit" element={<EditProduct />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
