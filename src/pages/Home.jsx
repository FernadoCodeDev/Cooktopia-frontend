import React, {useEffect, useState } from "react";
import Header from "../layout/Header";
import Main from "../layout/Main";
import Footer from "../layout/Footer";
import axios from "axios";

export default function Home() {
    const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

   useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setCategories(data.categories);
      })
      .catch((err) => console.error("Error al leer JSON:", err));
  }, []);


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main products={products}  categories={categories} />
      <Footer />
    </div>
  );
}