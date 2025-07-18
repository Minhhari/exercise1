import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import LaptopManagement from './components/LaptopManagement';
import LaptopDetail from './components/LaptopDetail';
import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/laptops" element={<LaptopManagement />} />
        <Route path="/laptops/:id" element={<LaptopDetail />} />
        <Route path="/*" element={<h2>404 - Not Found</h2>} />
        <Route path="/home" element={<h2>Welcome to Laptop Management Home Page</h2>} />
        <Route path="/link" element={<h2>More Link</h2>} />
      </Routes>
    </Router>
  );
}

export default App;