import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const bannerImages = [
  { src: '/images/banner.jpg', title: 'This is Home Page' },
  { src: '/images/banner2.jpg' },
  { src: '/images/banner3.jpg' }
];

const Home = () => {
  return (
    <>
      {/* Hero Banner Section with Carousel */}
      <div className="position-relative w-100">
        <Carousel>
          {bannerImages.map((img, idx) => (
            <Carousel.Item key={idx}>
              <img
                src={img.src}
                alt={img.title}
                className="img-fluid w-100"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h1 className="display-4 fw-bold mb-3" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                  {img.title}
                </h1>
                <p>{img.desc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Home;