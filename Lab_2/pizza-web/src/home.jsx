import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import ảnh từ thư mục assets (đường dẫn đúng)
import pizzaHero from './assets/images/pizza-hero.jpg';
import margheritaImg from './assets/images/margherita.jpg';
import mushroomImg from './assets/images/mushroom.jpg';
import hawaiianImg from './assets/images/hawaiian.jpg';
import pestoImg from './assets/images/pesto.jpg';

const Home = () => {
  return (
    <div className="min-vh-100">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#" style={{color: '#d2691e'}}>
            🍕 Pizza House
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
        <div className="d-flex justify-content-between align-items-center w-100">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link active fw-semibold" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link fw-semibold" href="#">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link fw-semibold" href="#">Contact</a>
            </li>
            </ul>
            <form className="d-flex" role="search">
            <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search"
                style={{width: '200px'}}
            />
            <button className="btn btn-outline-primary" type="submit">
                🔍
            </button>
            </form>
        </div>
        </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="text-white py-5 position-relative" 
        style={{
          backgroundImage: `url(${pizzaHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '70vh'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100" 
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1
          }}
        ></div>
        
        <div className="container position-relative" style={{zIndex: 2}}>
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">
                Delicious Pizza Delivered Fresh & Hot!
              </h1>
              <p className="lead mb-4">
                Experience the perfect blend of crispy crust, rich sauce, and premium toppings. 
                Made with love, delivered with care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pizza Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our Menu</h2>
            <p className="lead text-muted">Handcrafted with the finest ingredients</p>
          </div>
          
          <div className="row g-4">
    <div className="col-md-3">
      <div className="card h-100">
        <img src={margheritaImg} className="card-img-top" alt="Margherita Pizza" />
        <div className="card-body">
          <h5 className="card-title">Margherita Pizza</h5>
          <p className="card-text">Fresh mozzarella, tomato sauce, and basil leaves on a crispy thin crust.</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold text-primary">$12.99</span>
            <button className="btn btn-primary btn-sm">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card h-100">
        <img src={mushroomImg} className="card-img-top" alt="Mushroom Pizza" />
        <div className="card-body">
          <h5 className="card-title">Mushroom Pizza</h5>
          <p className="card-text">Sautéed mushrooms, mozzarella, garlic, and fresh herbs.</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold text-primary">$13.49</span>
            <button className="btn btn-primary btn-sm">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card h-100">
        <img src={hawaiianImg} className="card-img-top" alt="Hawaiian Pizza" />
        <div className="card-body">
          <h5 className="card-title">Hawaiian Pizza</h5>
          <p className="card-text">Ham, pineapple, mozzarella cheese, and tomato sauce.</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold text-primary">$14.29</span>
            <button className="btn btn-primary btn-sm">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card h-100">
        <img src={pestoImg} className="card-img-top" alt="Pesto Pizza" />
        <div className="card-body">
          <h5 className="card-title">Pesto Pizza</h5>
          <p className="card-text">Basil pesto, mozzarella, cherry tomatoes, and arugula.</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold text-primary">$13.99</span>
            <button className="btn btn-primary btn-sm">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-lg-4">
              <div className="mb-3">
                <span style={{fontSize: '60px'}}>🚚</span>
              </div>
              <h4 className="fw-bold mb-3">Fast Delivery</h4>
              <p className="text-muted">
                Hot and fresh pizza delivered to your door in 30 minutes or less.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <span style={{fontSize: '60px'}}>👨‍🍳</span>
              </div>
              <h4 className="fw-bold mb-3">Expert Chefs</h4>
              <p className="text-muted">
                Our experienced chefs use traditional techniques and premium ingredients.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <span style={{fontSize: '60px'}}>⭐</span>
              </div>
              <h4 className="fw-bold mb-3">Quality Guaranteed</h4>
              <p className="text-muted">
                100% satisfaction guaranteed or your money back, no questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Your Table Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Book Your Table</h2>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form>
                <div className="row g-3 mb-4">
                  <div className="col-md-4">
                    <input 
                      type="text" 
                      className="form-control form-control-lg" 
                      placeholder="Your Name *" 
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <input 
                      type="email" 
                      className="form-control form-control-lg" 
                      placeholder="Your Email *" 
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <select className="form-select form-select-lg" required>
                      <option value="">Select a Service</option>
                      <option value="dine-in">Dine In</option>
                      <option value="takeaway">Takeaway</option>
                      <option value="delivery">Delivery</option>
                      <option value="catering">Catering</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-4">
                  <textarea 
                    className="form-control form-control-lg" 
                    rows="5" 
                    placeholder="Please write your comment"
                    style={{resize: 'none'}}
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="btn btn-lg px-5 py-3 fw-bold"
                    style={{
                      backgroundColor: '#ffc107',
                      color: '#000',
                      border: 'none',
                      borderRadius: '5px'
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h5 className="fw-bold mb-3" style={{color: '#d2691e'}}>🍕 Pizza House</h5>
              <p className="text-muted">
                Serving the best pizza in town since 2024. Made with love, delivered with care.
              </p>
            </div>
            <div className="col-lg-3">
              <h6 className="fw-bold mb-3">Quick Links</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="text-muted text-decoration-none">Menu</a></li>
                <li><a href="#" className="text-muted text-decoration-none">About Us</a></li>
                <li><a href="#" className="text-muted text-decoration-none">Contact</a></li>
                <li><a href="#" className="text-muted text-decoration-none">FAQ</a></li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h6 className="fw-bold mb-3">Contact Info</h6>
              <p className="text-muted mb-1">📞 (555) 123-4567</p>
              <p className="text-muted mb-1">📧 info@pizzahouse.com</p>
              <p className="text-muted">📍 123 Bach Dang, Da Nang</p>
            </div>
          </div>
          <hr className="my-4" />
          <div className="text-center">
            <p className="text-muted mb-0">
              &copy; 2024 Pizza House. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;