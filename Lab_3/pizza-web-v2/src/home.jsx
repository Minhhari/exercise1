import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import margheritaImg from './assets/images/margherita.jpg';
import mushroomImg from './assets/images/mushroom.jpg';
import hawaiianImg from './assets/images/hawaiian.jpg';
import pestoImg from './assets/images/pesto.jpg';
import heroSlide1 from './assets/images/pizza-hero.jpg';
import heroSlide2 from './assets/images/pizza-hero-2.jpg';
import heroSlide3 from './assets/images/pizza-hero-3.jpg';
import heroSlide4 from './assets/images/pizza-hero-4.jpg';
import heroSlide5 from './assets/images/pizza-hero-5.jpg';

// Navbar Component
const NavigationBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="#" style={{color: '#d2691e'}}>
          🍕 Pizza House
        </a>
        <button 
          className="navbar-toggler" 
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
          <div className="d-flex justify-content-between align-items-center w-100">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active fw-semibold" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#">Contact</a>
              </li>
            </ul>
            <div className="d-flex">
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
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="text-white py-5 position-relative" style={{ minHeight: '70vh' }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={heroSlide1}
            alt="First slide"
            style={{ height: '70vh', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3 className="display-4 fw-bold mb-4">Delicious Pizza Delivered Fresh!</h3>
            <p className="lead mb-4">
              Enjoy our classic Margherita with fresh mozzarella and basil.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={heroSlide2}
            alt="Second slide"
            style={{ height: '70vh', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3 className="display-4 fw-bold mb-4">Savor the Mushroom Magic!</h3>
            <p className="lead mb-4">
              Indulge in our rich and savory mushroom pizza with fresh herbs.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={heroSlide3}
            alt="Third slide"
            style={{ height: '70vh', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3 className="display-4 fw-bold mb-4">Tropical Hawaiian Delight!</h3>
            <p className="lead mb-4">
              Experience the sweet and savory blend of ham and pineapple.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={heroSlide4}
            alt="Fourth slide"
            style={{ height: '70vh', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3 className="display-4 fw-bold mb-4">Fresh Pesto Perfection!</h3>
            <p className="lead mb-4">
              Dive into our vibrant pesto pizza with cherry tomatoes and arugula.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={heroSlide5}
            alt="Fifth slide"
            style={{ height: '70vh', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3 className="display-4 fw-bold mb-4">Pizza Crafted with Love!</h3>
            <p className="lead mb-4">
              Made with premium ingredients, delivered hot to your door.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

// Pizza Card Component
const PizzaCard = ({ image, title, description, price, onAddToCart }) => {
  return (
    <div className="col-md-3">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold text-primary">{price}</span>
            <button 
              className="btn btn-primary btn-sm"
              onClick={() => onAddToCart(title, price)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Menu Section Component
const MenuSection = () => {
  const [cart, setCart] = useState([]);

  const pizzas = [
    {
      image: margheritaImg,
      title: "Margherita Pizza",
      description: "Fresh mozzarella, tomato sauce, and basil leaves on a crispy thin crust.",
      price: "$12.99"
    },
    {
      image: mushroomImg,
      title: "Mushroom Pizza", 
      description: "Sautéed mushrooms, mozzarella, garlic, and fresh herbs.",
      price: "$13.49"
    },
    {
      image: hawaiianImg,
      title: "Hawaiian Pizza",
      description: "Ham, pineapple, mozzarella cheese, and tomato sauce.",
      price: "$14.29"
    },
    {
      image: pestoImg,
      title: "Pesto Pizza",
      description: "Basil pesto, mozzarella, cherry tomatoes, and arugula.",
      price: "$13.99"
    }
  ];

  const handleAddToCart = (title, price) => {
    setCart([...cart, { title, price }]);
    alert(`${title} added to cart!`);
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Our Menu</h2>
          <p className="lead text-muted">Handcrafted with the finest ingredients</p>
        </div>
        <div className="row g-4">
          {pizzas.map((pizza, index) => (
            <PizzaCard
              key={index}
              image={pizza.image}
              title={pizza.title}
              description={pizza.description}
              price={pizza.price}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Book Table Section Component
const BookTableSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    comment: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', service: '', comment: '' });
  };

  return (
    <section className="py-5 bg-dark text-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Book Your Table</h2>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div onSubmit={handleSubmit}>
              <div className="row g-3 mb-4">
                <div className="col-md-4">
                  <input 
                    type="text"
                    name="name"
                    className="form-control form-control-lg" 
                    placeholder="Your Name *" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <input 
                    type="email"
                    name="email"
                    className="form-control form-control-lg" 
                    placeholder="Your Email *" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <select 
                    name="service"
                    className="form-select form-select-lg" 
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                  >
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
                  name="comment"
                  className="form-control form-control-lg" 
                  rows="5" 
                  placeholder="Please write your comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  style={{resize: 'none'}}
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit"
                  onClick={handleSubmit}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
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
            © 2024 Pizza House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main Home Component
const Home = () => {
  return (
    <>
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      <div className="min-vh-100">
        <NavigationBar />
        <HeroSection />
        <MenuSection />
        <BookTableSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;