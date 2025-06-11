import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StudentCard from "./StudentCard";

const StudentList = ({ students }) => {
  return (
    <Container>
      <h1 className="my-4 text-center">Student information</h1>
      <Row>
        {students.map((student, index) => (
          <Col key={index} sm={12} md={4}>
            <StudentCard student={student} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StudentList;