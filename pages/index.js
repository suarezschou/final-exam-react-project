<<<<<<< Updated upstream
import'./_app'
import commerce from '../lib/commerce'
=======
import commerce from '../lib/commerce';
>>>>>>> Stashed changes
import ProductList from '../components/productList';
import CategoryList from '../components/categoryList';
import Link from 'next/link';
import React from 'react';


export async function getStaticProps() {
    const merchant = await commerce.merchants.about()
    const {data: categories} = await commerce.categories.list()
    const {data: products} = await commerce.products.list()

    return{
        props: {
            merchant,
            categories,
            products
        },
    };
}

export default function Indexpage({merchant, categories, products}){
    return (
        
        <React.Fragment>
<<<<<<< Updated upstream
            <h1> {merchant.business_name} </h1>
            <h1 className="text-xl text-blue-600"> Andre Schou's Web shop </h1>

            <h3 className='text-lg text-blue-600'>
=======
            <div className='flex flex-col justify-center py-10 bg-orange-300'>
            <h1 className='text-4xl'> Andre Schou's web shop </h1>

            <h3 className='text-2xl'>
>>>>>>> Stashed changes
                <Link legacyBehavior href="/categories">
                    <a>Categories</a>
                </Link>
            </h3>

<<<<<<< Updated upstream
            <h4 className='text-green-500'>
            <CategoryList categories={categories} />
            </h4>

            <h3 className='text-lg text-blue-600'>
=======
            <h3 className='text-2xl'>
>>>>>>> Stashed changes
                <Link legacyBehavior href="/products">
                    <a>Products</a>
                </Link>
            </h3>
            <ProductList products={products} />
            </div>
        </React.Fragment>
        
    );
}
