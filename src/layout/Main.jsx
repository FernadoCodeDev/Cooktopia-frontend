import React from "react";
import ProductSection from "../component/Sections/ProductSection";
import Info from "../component/Sections/Info";
import CategoryCards from "../component/Sections/CategoryCards";
import axios from "axios";

const Main = ({ products, categories }) => {
  return (
    <main>
      <section>
        <ProductSection products={products} categories={categories}/> 
        <Info />
        <CategoryCards />
      </section>
    </main>
  );
};

export default Main;