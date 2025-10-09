import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-6 text-base text-white bg-black">
      <div className="max-w-6xl mx-auto">
        <p className="mb-4 leading-relaxed">
          Esta página muestra la vista del administrador, ya que fue desarrollada como
          parte de una prueba técnica cuyo objetivo era construir una tienda en línea
          funcional inspirada en la experiencia de <span className="font-semibold">WooCommerce</span>.
          Aquí puedes explorar funciones como eliminar o simular la edición de productos de
          <span className="font-semibold"> Cooktopia Shop</span>; sin embargo, los cambios se
          restablecen al actualizar la página.
        </p>

        <p className="mb-4 leading-relaxed">
          <span className="font-semibold">Cooktopia Shop</span> no es una tienda real.
          Fue creada exclusivamente con fines de desarrollo y diseño, incluyendo la creación
          del logotipo original y el uso de imágenes libres de derechos.
        </p>

        <p className="mb-4 leading-relaxed">
          Este proyecto forma parte de
          <a
            className="font-bold transition-all duration-500 ease-in-out hover:text-beige-500"
            href="https://landingmine.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}LandingMine
          </a>, una colección de 19 landing pages con diferentes temáticas desarrolladas para
          mostrar conceptos de diseño y desarrollo web.
        </p>
      </div>

      <div className="mt-8 border-t-2 border-white opacity-50"></div>

      <p className="mt-6 text-sm text-center">
        © {new Date().getFullYear()} Cooktopia Shop. Proyecto con fines educativos y de desarrollo.
      </p>
    </footer>

  );
};

export default Footer;