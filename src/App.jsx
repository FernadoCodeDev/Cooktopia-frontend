import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import CreatePage from "./pages/CreatePage"
import UpdatePage from "./pages/UpdatePage"

const App = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/CreatePage" element={<CreatePage />} />
      <Route path="/UpdatePage/:id/edit" element={<UpdatePage />} />

    </Routes>
  );
};

export default App;
