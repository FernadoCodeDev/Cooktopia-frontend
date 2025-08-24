import React from "react";
import Update from "../component/CRUD/UpdateForm"

const MainUpdate = ({categories, product}) => {
    return (
        <main className="flex-1 bg-beige-200 dark:bg-neutral-900">
            <section >
                <Update categories={categories} product={product}/>
            </section>
        </main>
    );
};

export default MainUpdate;