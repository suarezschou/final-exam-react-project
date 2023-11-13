import commerce from "../lib/commerce";
import CategoryList from "../components/categoryList";
import React from "react";


export async function getStaticProps() {
    const { data:categories }= await commerce.categories.list();

    return{
        props: {
            categories,
        },
    };
}

export default function CategoriesPage({ categories }) {
    return (
        <React.Fragment>
<<<<<<< Updated upstream
            <h1 className="text-lg text-blue-600"> Categories </h1>
=======
            <div className='flex flex-col justify-center py-10 bg-orange-300'>
            <h1 className='text-2xl'> Categories </h1>
>>>>>>> Stashed changes

            <CategoryList categories={categories} />
            </div>
        </React.Fragment>
    );
}