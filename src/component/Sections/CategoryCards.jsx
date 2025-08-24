import React from "react";
import ImgN1 from "../../assets/img/ImgN1.webp";
import ImgN2 from "../../assets/img/ImgN2.webp";
import ImgN3 from "../../assets/img/ImgN3.webp";
import ImgN4 from "../../assets/img/ImgN4.webp";
import ImgN5 from "../../assets/img/ImgN5.webp";
import ImgN6 from "../../assets/img/ImgN6.webp";

const CategoryCards = () => {
  return (

    <div className="relative flex flex-col items-center justify-center w-full gap-4 p-4 bg-beige-200 text-beige-950 dark:text-beige-200 dark:bg-neutral-900 min-h-auto ">
      <h1 className="font-mono font-bold text-2xl md:text-4xl text-center max-w-[70rem]">
        CONSIGUE TODO EN UN SOLO LUGAR
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-auto max-w-[70rem] p-4">

        <div className="relative w-full h-auto overflow-hidden shadow-lg cursor-pointer rounded-3xl group">

          <img
            src={ImgN1}
            alt="alt"
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 transition-all duration-500 bg-black/40 group-hover:bg-black/60"></div>

          <div className="absolute inset-0 flex items-center justify-center p-4">
            <h2 className="text-2xl font-bold text-center text-white transition-opacity duration-500 opacity-0 group-hover:opacity-100">
              Cuchillos y Accesorios de Corte
            </h2>
          </div>
        </div>

        <div className="relative w-full h-auto overflow-hidden shadow-lg cursor-pointer rounded-3xl group">

          <img
            src={ImgN2}
            alt="alt"
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 transition-all duration-500 bg-black/40 group-hover:bg-black/60"></div>

          <div className="absolute inset-0 flex items-center justify-center p-4">
            <h2 className="text-2xl font-bold text-center text-white transition-opacity duration-500 opacity-0 group-hover:opacity-100">
              Utensilios de Cocina
            </h2>
          </div>
        </div>

        <div className="relative w-full h-auto overflow-hidden shadow-lg cursor-pointer rounded-3xl group">

          <img
            src={ImgN3}
            alt="alt"
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 transition-all duration-500 bg-black/40 group-hover:bg-black/60"></div>

          <div className="absolute inset-0 flex items-center justify-center p-4">
            <h2 className="text-2xl font-bold text-center text-white transition-opacity duration-500 opacity-0 group-hover:opacity-100">
              Sartenes y Ollas
            </h2>
          </div>
        </div>

        <div className="relative w-full h-auto overflow-hidden shadow-lg cursor-pointer rounded-3xl group">

          <img
            src={ImgN4}
            alt="alt"
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 transition-all duration-500 bg-black/40 group-hover:bg-black/60"></div>

          <div className="absolute inset-0 flex items-center justify-center p-4">
            <h2 className="text-2xl font-bold text-center text-white transition-opacity duration-500 opacity-0 group-hover:opacity-100">
              Electrodomésticos
            </h2>
          </div>
        </div>

        <div className="relative w-full h-auto overflow-hidden shadow-lg cursor-pointer rounded-3xl group">

          <img
            src={ImgN5}
            alt="alt"
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 transition-all duration-500 bg-black/40 group-hover:bg-black/60"></div>

          <div className="absolute inset-0 flex items-center justify-center p-4">
            <h2 className="text-2xl font-bold text-center text-white transition-opacity duration-500 opacity-0 group-hover:opacity-100">
              Horneado y Repostería
            </h2>
          </div>
        </div>

        <div className="relative w-full h-auto overflow-hidden shadow-lg cursor-pointer rounded-3xl group">

          <img
            src={ImgN6}
            alt="alt"
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 transition-all duration-500 bg-black/40 group-hover:bg-black/60"></div>

          <div className="absolute inset-0 flex items-center justify-center p-4">
            <h2 className="text-2xl font-bold text-center text-white transition-opacity duration-500 opacity-0 group-hover:opacity-100">
              Accesorios de Cocina
            </h2>
          </div>
        </div>

      </div>
    </div>

  );
};

export default CategoryCards;
