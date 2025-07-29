import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SagaDetail from "./pages/SagaDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/saga/:id" element={<SagaDetail />} />
    </Routes>
  );
}

export default App;
