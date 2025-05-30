import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Ex3 = () => {
  return (
    <div>
      {/* Header */}
      <div className="alert mb-0" style={{ backgroundColor: "#e9f2f8" }}>
        <h4 className="mb-0">Let’s test the grid!</h4>
      </div>

      {/* Demo grid area */}
      <div className="container py-4">
        {/* Row 1 - 2 equal columns (md-6) */}
        <div className="row g-2">
          <div className="col-md-6 text-center border bg-secondary bg-opacity-50 py-2">
            First col
          </div>
          <div className="col-md-6 text-center border bg-secondary bg-opacity-50 py-2">
            Second col
          </div>
        </div>

        {/* Row 2 - 3 equal columns (md-4) */}
        <div className="row g-2 mt-2">
          <div className="col-md-4 text-center border bg-secondary bg-opacity-50 py-2">col</div>
          <div className="col-md-4 text-center border bg-secondary bg-opacity-50 py-2">col</div>
          <div className="col-md-4 text-center border bg-secondary bg-opacity-50 py-2">col</div>
        </div>

        {/* Row 3 - 4 equal columns (md-3) */}
        <div className="row g-2 mt-2">
          <div className="col-md-3 text-center border bg-secondary bg-opacity-50 py-2">col</div>
          <div className="col-md-3 text-center border bg-secondary bg-opacity-50 py-2">col</div>
          <div className="col-md-3 text-center border bg-secondary bg-opacity-50 py-2">col</div>
          <div className="col-md-3 text-center border bg-secondary bg-opacity-50 py-2">col</div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="text-center fw-bold py-3"
        style={{ backgroundColor: "#d8c7c7" }}
      >
        Created by ABC!
      </div>
    </div>
  );
};

export default Ex3;
