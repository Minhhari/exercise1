import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Ex4 = () => {
  return (
    <div>
      {/* Header */}
      <div className="text-center py-4" style={{ backgroundColor: "#f7941d" }}>
        <img
          src="/Logo.png"
          alt="FPT Logo"
          height="80"
        />
        <nav className="mt-2">
          <a href="#home" className="mx-2 text-white text-decoration-none">Home</a>
          <a href="#about" className="mx-2 text-white text-decoration-none">About</a>
          <a href="#contact" className="mx-2 text-white text-decoration-none">Contact</a>
        </nav>
      </div>

      {/* About Section */}
      <div className="container text-center my-5" id="about">
        <h5><strong>About</strong></h5>
        <p>This is the about section of the website.</p>
      </div>

      {/* Contact Section */}
      <div className="container text-center my-5" id="contact">
        <h5><strong>Contact</strong></h5>
        <p>
          For any inquiries, please contact us at{" "}
          <a href="mailto:example@example.com">example@example.com</a>.
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center py-2" style={{ backgroundColor: "#fbc46d" }}>
        © 2023 Website. All rights reserved.
      </footer>
    </div>
  );
};

export default Ex4;
