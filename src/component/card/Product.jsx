import React, { useEffect, useState } from "react";
import axios from "axios";
import ArrowSVG from "../../assets/svg/ArrowSVG";

function Product({ products = [], onProductClick }) {

  if (!products.length) {
    return <p>No hay productos disponibles</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 max-w-[80rem] m-auto">

      {products.map((product) => (
        <div
          className="relative grid items-center justify-center w-full h-auto grid-cols-1 p-2 bg-stone-950"
          key={product.id}
          data-category-id={product.categories_id}
          onClick={() => onProductClick(product)}
        >
          {/* T background */}
          <div className="absolute top-0 left-0 w-full h-[50%] bg-stone-950"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-between w-full h-full">
            <div className="flex flex-row justify-between w-full p-2">
              <h1 className="font-bold text-beige-200">{product.status}</h1>
              <div className="flex items-center justify-center w-10 h-10 p-2 border-2 rounded-full border-beige-200">
                <ArrowSVG />
              </div>
            </div>

            {/* Image */}
            <img
              src={`/image/${product.image}`}
              alt={product.name}
              className="w-full h-auto drop-shadow-2xl"
            />

            <div className="flex flex-row justify-between w-full p-2 ">
              <h1 className="font-bold text-beige-950">{product.name}</h1>
              <p className=" text-beige-950">
                <span className="font-bold text-beige-950">$</span>
                {product.price}
              </p>
            </div>
          </div>

          {/* b background */}
          <div className="absolute bottom-0 left-0 w-full h-[50%] bg-beige-300"></div>
        </div>
      ))}
    </div>
  );
}

export default Product;