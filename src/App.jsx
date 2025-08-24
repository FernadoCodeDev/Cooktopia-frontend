// src/App.js
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<Home products={products} categories={categories} />} />
        <Route path="/CreatePage" element={<CreatePage />} />
        <Route path="/UpdatePage/:id/edit" element={<UpdatePage />} />
      </Routes>
    </div>
  );
};

export default App;