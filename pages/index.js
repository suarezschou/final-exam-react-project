import'./_app'
import commerce from '../lib/commerce'
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
            <h1> {merchant.business_name} </h1>
            <h1 className="text-xl text-blue-600"> Andre Schou's Web shop </h1>

            <h3 className='text-lg text-blue-600'>
                <Link legacyBehavior href="/categories">
                    <a>Categories</a>
                </Link>
            </h3>

            <h4 className='text-green-500'>
            <CategoryList categories={categories} />
            </h4>

            <h3 className='text-lg text-blue-600'>
                <Link legacyBehavior href="/products">
                    <a>Products</a>
                </Link>
            </h3>
            <ProductList products={products} />
        </React.Fragment>
    );
}
