import React from "react";
import { router } from "@inertiajs/react";
import { toast } from 'react-toastify';
import ShoppingCart from "../../assets/svg/ShoppingCart";
import Visa from "../../assets/svg/Visa";
import MasterCard from "../../assets/svg/MasterCard";
import Paypal from "../../assets/svg/Paypal";
import Close from "../../assets/svg/Close";
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";

export default function Modal({ isOpen, onClose, product, onDelete }) {
  if (!isOpen || !product) return null;

  const Edit = () => {
    console.log(`Editar el producto con ID: ${product.id}`);
  };

  const handleDeleteClick = () => {
    onDelete(product.id);
    toast.success(`El producto ${product.name} se ha eliminado :)`);
    onClose();
  };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 text-center text-black bg-black bg-opacity-60">
      <div className="relative w-full max-w-[60rem] p-2 bg-stone-950 rounded-xl">
        <button
          onClick={onClose}
          className="absolute z-40 w-20 h-auto cursor-pointer top-2 right-2 "
        >
          <Close />
        </button>

        <div className="absolute top-0 left-0 w-full h-[50%] md:w-[50%] md:h-full bg-stone-950"></div>

        <div className="relative z-10 grid items-center justify-center w-full grid-cols-1 gap-2 md:grid-cols-2">
          <div className="flex flex-col items-start justify-center grid-cols-1 gap-2 ">
            <h2 className="absolute mb-2 text-lg font-bold text-beige-200 md:text-stone-950 md:text-xl top-2 left-2 ">
              {product.status}
            </h2>
            <img
              src={`/image/${product.image}`}
              alt={product.name}
              className="object-contain w-48 h-48 m-auto mt-16 md:mt-0 md:w-80 md:h-80" />
          </div>

          <div className="flex flex-col items-center justify-center grid-cols-1 gap-2 md:mt-24 ">
            <div className="flex flex-row justify-center gap-4 text-stone-500 md:text-beige-200">
              <h1 className="mb-2 text-xl font-bold text-center md:text-2xl ">
                {product.name}
              </h1>
              <p className="text-xl text-stone-500 md:text-beige-200">${product.price}</p>
            </div>
            <p className="text-base text-beige-900 md:text-beige-200">{product.description}</p>

            <button className="flex flex-row justify-center w-full gap-2 p-2 font-bold text-center text-black transition duration-700 ease-out cursor-pointer hover:text-white rounded-xl bg-beige-300 hover:bg-beige-500">
              <ShoppingCart width="32" /> Comprar
            </button>

            <div className="flex-row hidden gap-1 md:flex">
              <Visa width="30" />
              <MasterCard width="30" />
              <Paypal width="30" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between gap-1">
              <h1 className="text-sm">¿Algo mal? </h1>
              <div className="flex flex-row gap-1 md:hidden">
                <Visa width="30" />
                <MasterCard width="30" />
                <Paypal width="30" />
              </div>
            </div>
            <div className="flex flex-row gap-1">
              <EditButton product={product} onClick={onClose} />
              <DeleteButton product={product} onClick={handleDeleteClick} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[50%] md:w-[50%] md:h-full bg-beige-200"></div>
      </div>
    </div >
  );
}