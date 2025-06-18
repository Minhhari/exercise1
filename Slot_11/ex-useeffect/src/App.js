// src/App.js
import React from "react";
import ValidatedInput from "./ValidatedInput";
import LoginFormValidation from "./LoginFormValidation";
import MultiFieldForm from "./MultiFieldForm";

function App() {
  return (
    <div className="container mt-4">
      {/* <MultiFieldForm /> */}
      <LoginFormValidation />
      {/* <ValidatedInput /> */}
    </div>
  );
}

export default App;
