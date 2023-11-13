import commerce from "../lib/commerce";
import ProductList from "../components/productList";
import React from "react";

export async function getStaticProps() {
    const { data:products }= await commerce.products.list();

    return{
        props: {
            products,
        },
    };
}

export default function ProductsPage({ products }) {
    return (
        <React.Fragment>
<<<<<<< Updated upstream
            <h1 className="text-lg text-blue-600"> Products </h1>
=======
            <div className='flex flex-col justify-center py-10 bg-orange-300'>
            <h1 className='text-2xl'> Products </h1>
>>>>>>> Stashed changes

            <ProductList products={products} />
            </div>
        </React.Fragment>
    );
}