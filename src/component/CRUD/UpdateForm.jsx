// src/component/CRUD/UpdateForm.jsx
import React, { useEffect } from "react";
import { useForm } from '@inertiajs/react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateForm = ({ categories, product }) => {

  console.log("producto", product);

  if (!product) {
    return <div>Cargando datos del producto...</div>;
  }

  const { data, setData, put, processing, errors } = useForm({

    name: product.name || '',
    description: product.description || '',
    price: product.price || '',
    categories_id: product.categories_id || '',
    status: product.status || 'normal',
    image: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const submitData = { ...data };

    if (!submitData.image) {
      delete submitData.image;
    }

    put(`/products/${product.id}`, {
      data: submitData,
      //forceFormData: true,
      onSuccess: () => {
        toast.success('Producto actualizado :)');

        setTimeout(() => {
          window.location.reload(); // reload
        }, 5000);
      },
      onError: (err) => {
        console.error("Error de validación:", err);
        toast.error('Error al actualizar :(');
      }
    });
  };

  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setData('image', file || null);
  };

  return (
    <div className="flex flex-col gap-4 p-4 m-auto bg-beige-200 text-beige-950 dark:text-beige-200 dark:bg-neutral-900">
      <h1 className="mb-6 text-2xl font-bold text-center ">
        Panel de Actualización
      </h1>

      <div className="flex flex-col gap-4 w-full m-auto max-w-[60rem]">
        <details className="p-4 bg-white border rounded-lg shadow ">
          <summary className="text-lg font-semibold cursor-pointer text-neutral-800">
            Actualizar Producto
          </summary>

          {product.image && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-neutral-950">Imagen actual:</h4>
              <img
                src={`/storage/${product.image}`}
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
                value={data.name}
                onChange={handleChange}
                placeholder="Sartén Antiadherente"
                className="w-full p-2 mt-1 border rounded-lg"
              /> {errors.name && <div className="text-red-900">{errors.name}</div>}
            </div>

            <div className="text-neutral-500">
              <label className="block text-sm font-medium text-neutral-950">
                Descripción
              </label>
              <textarea
                name="description"
                value={data.description}
                onChange={handleChange}
                placeholder="Descripción del producto"
                className="w-full p-2 mt-1 border rounded-lg"
                rows="3"
              ></textarea> {errors.description && <div className="text-red-900">{errors.description}</div>}
            </div>

            <div className="text-neutral-500">
              <label className="block text-sm font-medium text-neutral-950">
                Precio
              </label>
              <input
                type="number"
                name="price"
                step="0.01"
                value={data.price}
                onChange={handleChange}
                placeholder="0.00"
                className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-beige-300"
              /> {errors.price && <div className="text-red-900">{errors.price}</div>}
            </div>

            <div className="text-neutral-500">
              <label className="block text-sm font-medium text-neutral-950">Categoría</label>
              <select
                name="categories_id"
                value={data.categories_id}
                onChange={handleChange}
                className="w-full p-2 mt-1 border rounded-lg text-neutral-500"
              >
                <option value="">Selecciona una categoría</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
              {errors.categories_id && <div className="text-red-900">{errors.categories_id}</div>}
            </div>

            <div className="text-neutral-500">
              <label className="block text-sm font-medium text-neutral-950">
                Estado
              </label>
              <select
                name="status"
                value={data.status}
                onChange={handleChange}
                className="w-full p-2 mt-1 border rounded-lg"
              >
                <option value="normal">Normal</option>
                <option value="new">Nuevo</option>
                <option value="offer">Oferta</option>
              </select>
              {errors.status && <div className="text-red-900">{errors.status}</div>}
            </div>

            <div className="text-neutral-500">
              <label className="block text-sm font-medium text-neutral-950">
                Este campo permanece vacio
              </label>
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
                className="w-full p-2 mt-1 border rounded-lg"
              /> {errors.image && <div className="text-red-900">{errors.image}</div>}
            </div>

            <button
              type="submit"
              disabled={processing}
              className="px-4 py-2 text-white transition rounded-lg bg-neutral-800 hover:bg-neutral-950"
            >
              {processing ? 'Se está actualizando' : 'Actualizar Producto'}
            </button>
          </form>
        </details>
      </div>
    </div>
  );
};

export default UpdateForm;