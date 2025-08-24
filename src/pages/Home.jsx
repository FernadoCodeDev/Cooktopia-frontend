import React from "react";
import Header from "../layout/Header";
import Main from "../layout/Main";
import Footer from "../layout/Footer";
import axios from "axios";

export default function Home({products, categories}) {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main products={products}  categories={categories} />
      <Footer />
    </div>
  );
}