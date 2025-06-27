import React from "react";
import MyForm from "./components/MyForm";

const App = () => {
  const handleFormSubmit = (data) => {
    console.log("Dữ liệu người dùng:", data);
    // Có thể xử lý thêm như gửi lên API ở đây
  };

  return (
    <div className="App">
      <MyForm title="Đăng ký người dùng" onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;