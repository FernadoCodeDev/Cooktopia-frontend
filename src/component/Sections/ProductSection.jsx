import React, { useEffect, useState } from "react";
import Product from "../card/Product";
import Modal from "../ui/Modal";
import axios from "axios";

const ProductSection = ({ products, categories }) => {
    /*
        console.log("productos", products);
        console.log("categorías", categories);
    */
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");

    const ProductClick = (product) => {
        setSelectedProduct(product);
        setIsOpen(true);
    };

    const CategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredProducts = products.filter(product => {
        if (selectedCategory === "") {
            return true;
        }
        return product.categories_id.toString() === selectedCategory;
    });

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isOpen]);

    return (
        <div className="relative flex flex-col items-center justify-center w-full gap-4 p-4 bg-beige-200 text-beige-950 dark:text-beige-200 dark:bg-neutral-900">
            <h1 className="font-mono font-bold text-2xl md:text-4xl text-center max-w-[70rem]">
                Productos de COOKTOPIA
            </h1>

            <div className="flex flex-col gap-4 justify-between mx-auto max-w-[70rem]">

                <div className="flex flex-col">
                    <label className="p-2 text-lg font-bold rounded-t-lg text-stone-950 bg-beige-300">
                        Elegir Categoría
                    </label>
                    <select
                        className="p-2 rounded-b-2xl text-beige-200 bg-stone-950"
                        value={selectedCategory}
                        onChange={CategoryChange}
                    >
                        <option value="">Todas las categorías</option>
                        {categories && categories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>

                </div>
            </div>

            <Product
                products={filteredProducts}
                onProductClick={ProductClick} />

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                product={selectedProduct}
            />

        </div>
    );
};

export default ProductSection;