import React, { useEffect, useState } from "react";
import { useForm } from '@inertiajs/react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateForm = ({ categories, product }) => {
  if (!product) {
    return <div>No se encontró el producto</div>;
  }

  const [formData, setFormData] = useState({
    name: product.name,
    description: product.description,
    price: product.price,
    categories_id: product.categories_id,
    status: product.status,
    image: product.image,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`El Producto ${formData.name} se ha actualizado :)`, formData);
    //alert(`El Producto ${formData.name} se ha actualizado :)`);
    toast.success(`El Producto ${formData.name} se ha actualizado :)`);
  };

  return (
    <div className="flex flex-col gap-4 p-4 m-auto bg-beige-200 text-beige-950 dark:text-beige-200 dark:bg-neutral-900">
      <h1 className="mb-6 text-2xl font-bold text-center ">
        Panel de Actualización
      </h1>

      <div className="flex flex-col gap-4 w-full m-auto max-w-[60rem]">

        <details className="p-4 bg-white border rounded-lg shadow ">
          <summary className="text-lg font-semibold cursor-pointer text-neutral-800">
            Editar Categoría
          </summary>

          <form className="flex flex-col gap-4 mt-4">

            <div className="text-neutral-500">
              <label className="block text-sm font-medium text-neutral-950">
                Nombre
              </label>
              <input
                type="text"
                placeholder="Ej. Sartenes"
                className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-neutral-300"
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 text-white transition rounded-lg bg-neutral-800 hover:bg-neutral-950"
            >
              Guardar Categoría
            </button>
          </form>
        </details>

        <details className="p-4 bg-white border rounded-lg shadow ">
          <summary className="text-lg font-semibold cursor-pointer text-neutral-800">
            Actualizar Producto
          </summary>

          {product.image && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-neutral-950">Imagen actual:</h4>
              <img
                src={`/image/${product.image}`}
                alt={product.name}
                className="object-contain w-40 h-40 mt-2 rounded"
              />
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4" encType="multipart/form-data">

            <div className="text-neutral-500">
              <label className="block text-sm font-medium text-neutral-950">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Sartén Antiadherente"
                className="w-full p-2 mt-1 border rounded-lg"
              />
            </div>

            <div className="text-neutral-500">
              <label className="block text-sm font-medium text-neutral-950">
                Descripción
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Descripción del producto"
                className="w-full p-2 mt-1 border rounded-lg"
                rows="3"
              ></textarea>
            </div>

            <div className="text-neutral-500">
              <label className="block text-sm font-medium text-neutral-950">
                Precio
              </label>
              <input
                type="number"
                name="price"
                step="0.01"
                value={formData.price}
                onChange={handleChange}
                placeholder="0.00"
                className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-beige-300"
              />
            </div>

            <div className="text-neutral-500">
              <label className="block text-sm font-medium text-neutral-950">Categoría</label>
              <select
                name="categories_id"
                value={formData.categories_id}
                onChange={handleChange}
                className="w-full p-2 mt-1 border rounded-lg text-neutral-500"
              >
                <option value="">Selecciona una categoría</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>

            </div>

            <div className="text-neutral-500">
              <label className="block text-sm font-medium text-neutral-950">
                Estado
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-2 mt-1 border rounded-lg"
              >
                <option value="normal">Normal</option>
                <option value="new">Nuevo</option>
                <option value="offer">Oferta</option>
              </select>

            </div>

            <div className="text-neutral-500">
              <label className="block text-sm font-medium text-neutral-950">
                Imagen
              </label>
              <input
                type="file"
                name="image"

                className="w-full p-2 mt-1 border rounded-lg"
              />
            </div>

            <button
              type="submit"
       
              className="px-4 py-2 text-white transition rounded-lg bg-neutral-800 hover:bg-neutral-950"
            >
              Actualizar
            </button>
          </form>
        </details>
      </div>
    </div>
  );
};

export default UpdateForm;