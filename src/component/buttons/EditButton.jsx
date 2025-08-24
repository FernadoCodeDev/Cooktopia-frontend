import React from "react";
import { Link } from '@inertiajs/react';

export default function EditButton({ product, onClick }) {
    return (

         <Link
            href={`/products/${product.id}/edit`}
             //onClick={onClick} 
            className="p-2 font-bold text-center text-black transition duration-700 ease-out rounded-md cursor-pointer bg-beige-300 hover:bg-beige-600"
        >
            Actualizar {product.name}
        </Link>
    );
}