import React from "react";
import NavBar from "../layout/NavBar";
import MainUpdate from "../layout/MainUpdate";
import Footer from "../layout/Footer";

export default function UpdatePage({categories, product}) {

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <MainUpdate categories={categories} product={product} />
      <Footer />
    </div>
  );
}
