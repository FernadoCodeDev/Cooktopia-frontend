import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-6 text-white bg-black">
      <div className="max-w-6xl mx-auto">
        <p className="mb-4 text-lg leading-relaxed">
          <span className="font-bold">Cooktopia Shop</span> no
          es una tienda real y fue creado únicamente con fines de desarrollo y
          diseño. Además, yo diseñé el logotipo de{" "}
          <span className="font-bold">Cooktopia Shop</span> y utilicé imágenes
          de uso libre en su construcción.
        </p>

      </div>

      <div className="mt-8 border-t-2 border-white opacity-50"></div>

      <p className="mt-6 text-sm text-center">
        © 2025 Cooktopia Shop.{" "}
      </p>
    </footer>
  );
};

export default Footer;