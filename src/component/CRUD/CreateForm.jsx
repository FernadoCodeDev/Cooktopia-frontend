import React, { useEffect } from "react";
import { useForm } from '@inertiajs/react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateForm = ({ categories }) => {

  const { data, setData, post, processing, errors } = useForm({
    name: '',
    description: '',
    price: '',
    categories_id: '',
    status: 'normal',
    image: null,
  });

  const Submit = (e) => {
    e.preventDefault();
    post('/products', {
      forceFormData: true,
      onSuccess: () => {
        toast.success('Producto Agregado :)');
        setTimeout(() => {
          window.location.reload(); // reload
        }, 5000);
      },
      onError: (err) => {
        console.error(err);
        toast.error('Error al agregar producto :(');
      }
    });
  };

  const changes = (e) => {
    const { name, value } = e.target;
    setData(name, value);
  };

  const ImageChange = (e) => {
    setData('image', e.target.files[0]);
  };

  return (
    <div className="flex flex-col gap-4 p-4 m-auto bg-beige-200 text-beige-950 dark:text-beige-200 dark:bg-neutral-900">
      <h1 className="mb-6 text-2xl font-bold text-center ">
        Panel de Administración
      </h1>

      <div className="flex flex-col gap-4 w-full m-auto  max-w-[60rem]">

        <details className="p-4 bg-white border rounded-lg shadow ">
          <summary className="text-lg font-semibold cursor-pointer text-neutral-800">
            Crear Nueva Categoría
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
            Crear Nuevo Producto
          </summary>

          <form onSubmit={Submit} className="flex flex-col gap-4 mt-4" encType="multipart/form-data">

            <div className="text-neutral-500">
              <label className="block text-sm font-medium text-neutral-950">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={changes}
                placeholder="Sartén Antiadherente"
                className="w-full p-2 mt-1 border rounded-lg "
              /> {errors.name && <div className="text-red-900">{errors.name}</div>}
            </div>

            <div className="text-neutral-500">
              <label className="block text-sm font-medium text-neutral-950">
                Descripción
              </label>
              <textarea
                name="description"
                value={data.description}
                onChange={changes}
                placeholder="Descripción del producto"
                className="w-full p-2 mt-1 border rounded-lg "
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
                onChange={changes}
                placeholder="0.00"
                className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-beige-300"
              />  {errors.price && <div className="text-red-900">{errors.price}</div>}
            </div>

            <div className="text-neutral-500">
              <label className="block text-sm font-medium text-neutral-950">Categoría</label>
              <select
                name="categories_id"
                value={data.categories_id}
                onChange={changes}
                className="w-full p-2 mt-1 border rounded-lg text-neutral-500"
              >
                <option value="">Selecciona una categoría</option>

                {categories.map((category) => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
              {errors.categories_id && <div className="text-red-500">{errors.categories_id}</div>}
            </div>

            <div className="text-neutral-500">
              <label className="block text-sm font-medium text-neutral-950">
                Estado
              </label>
              <select
                name="status"
                value={data.status}
                onChange={changes}
                className="w-full p-2 mt-1 border rounded-lg ">
                <option value="normal">Normal</option>
                <option value="new">Nuevo</option>
                <option value="offer">Oferta</option>
              </select>
              {errors.status && <div className="text-red-500">{errors.status}</div>}
            </div>

            <div className="text-neutral-500">
              <label className="block text-sm font-medium text-neutral-950">
                Imagen
              </label>
              <input
                type="file"
                name="image"
                onChange={ImageChange}
                className="w-full p-2 mt-1 border rounded-lg"
              /> {errors.image && <div className="text-red-500">{errors.image}</div>}
            </div>

            <button
              type="submit"
              disabled={processing}
              className="px-4 py-2 text-white transition rounded-lg bg-neutral-800 hover:bg-neutral-950"
            >
              {processing ? 'Se esta guardando' : 'Guardar Producto'}
            </button>
          </form>
        </details>

      </div>
    </div>
  );
};

export default CreateForm;
