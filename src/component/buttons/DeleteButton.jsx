import React from "react";

export default function DeleteButton({ product, onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-2 font-bold text-center text-black transition duration-700 ease-out rounded-md cursor-pointer bg-beige-300 hover:bg-beige-600"
    >
      Eliminar {product.name}
    </button>
  );
}
