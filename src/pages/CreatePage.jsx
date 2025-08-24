// src/pages/CreatePage.js
import React from "react";
import { useParams } from 'react-router-dom';
import NavBar from "../layout/NavBar";
import MainCreate from "../layout/MainCreate";
import Footer from "../layout/Footer";
import data from "../data/data.json";

export default function CreatePage({ categories, products }) {

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <MainCreate categories={categories} products={products} />
      <Footer />
    </div>
  );
}

{/*Pass categories as a prop, otherwise it will return undefined*/}