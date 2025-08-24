import React from "react";
import CreateForm from "../component/CRUD/CreateForm"

const MainCreate = ({ categories }) => {
    return (
        <main className="flex-1 bg-beige-200 dark:bg-neutral-900">
            <section >
                <CreateForm categories={categories} />
            </section>
        </main>
    );
};

export default MainCreate;

{/*Pass categories as a prop, otherwise it will return undefined*/}