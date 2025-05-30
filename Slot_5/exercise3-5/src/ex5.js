import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const students = [
  {
    id: "DE180587",
    name: "Nguyễn Hữu Hoàng Vũ",
    location: "Đà Nẵng",
    image: "/student1.jpg",
  },
  {
    id: "DE180597",
    name: "Nguyễn Văn Hoàng Long",
    location: "Quảng Nam",
    image: "/student2.jpg",
  },
  {
    id: "DE180599",
    name: "Nguyễn Tiến Đạt",
    location: "Quảng Bình",
    image: "/student3.jpg",
  },
  {
    id: "DE180603",
    name: "Nguyễn Đại Đức",
    location: "Đà Nẵng",
    image: "/student4.jpg",
  },
];

// Hàm chia mảng sinh viên thành các nhóm 2 phần tử
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const Ex5 = () => {
  const studentRows = chunkArray(students, 2); // nhóm mỗi 2 sinh viên

  return (
    <div className="container py-4">
      {/* Banner */}
      <div className="mb-4 text-center">
        <img
          src="/banner.jpg"
          alt="FPT Banner"
          className="img-fluid rounded"
        />
      </div>

      {/* Title */}
      <h3 className="text-center mb-4">Students Detail</h3>

      {/* Grid hiển thị sinh viên */}
      {studentRows.map((group, rowIndex) => (
        <div className="row g-4 mb-3" key={rowIndex}>
          {group.map((student, index) => (
            <div key={index} className="col-md-6">
              <div className="card h-100 text-center shadow-sm">
                <img
                  src={student.image}
                    className="card-img-top"
                    alt={student.name}
                    style={{
                        objectFit: "contain",
                        height: "250px",
                        width: "100%",
                        padding: "10px",
                    }}
                />
                <div className="card-body">
                  <p className="fw-bold">{student.id}</p>
                  <p>{student.name}</p>
                  <p>{student.location}</p>
                  <div className="d-flex justify-content-center gap-2 align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name={`status-${student.id}`}
                        id={`present-${student.id}`}
                      />
                      <label className="form-check-label" htmlFor={`present-${student.id}`}>
                        Present
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name={`status-${student.id}`}
                        id={`absent-${student.id}`}
                      />
                      <label className="form-check-label" htmlFor={`absent-${student.id}`}>
                        Absent
                      </label>
                    </div>
                    <button className="btn btn-warning btn-sm">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Ex5;
