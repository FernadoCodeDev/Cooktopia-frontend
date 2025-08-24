import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../layout/NavBar";
import MainUpdate from "../layout/MainUpdate";
import Footer from "../layout/Footer";

import data from "../data/data.json";

export default function UpdatePage({ }) {

  const { id } = useParams();
  const product = data.products.find(p => p.id === parseInt(id));
  const categories = data.categories;

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <MainUpdate categories={categories} product={product} />
      <Footer />
    </div>
  );
}
