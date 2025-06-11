import React from "react";
import NameList from "./components/NameList";
import UserProfile from "./components/UserProfile";
import Welcome from "./components/Welcome";
import StudentList from "./components/StudentList";

function App() {
  const userData = { name: "traltb@fe.edu.vn", age: 39 };
  const namesList = ["traltb@fe.edu.vn", "test@fe.edu.vn"];

  const students = [
    { name: "traltb1@fe.edu.vn", age: 39, avatar: "/images/student1.jpg" },
    { name: "traltb2@fe.edu.vn", age: 40, avatar: "/images/student2.jpg" },
    { name: "traltb3@fe.edu.vn", age: 41, avatar: "/images/student3.jpg" },
  ];

  return (
    <>
      <Welcome name={userData.name} />
      <UserProfile user={userData} />
      <NameList names={namesList} />
      <StudentList students={students} />
    </>
  );
}

export default App;