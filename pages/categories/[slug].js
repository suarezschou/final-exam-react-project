import commerce from "../../lib/commerce";
import ProductList from "../../components/productList";
import React from "react";

export async function getStaticProps ({ params }) {
    const {slug} = params;

    const category = await commerce.categories.retrieve(slug,{
        type:"slug",
    });

    const { data:products} = await commerce.products.list({
        category_slug: [slug],
    });

    return{
        props:{
            category,
            products,
        },
    };
}

export async function getStaticPaths(){
    const { data: categories } = await commerce.categories.list();

    return{
        paths: categories.map((category) => ({
            params: {
                slug: category.slug,
            },
        })),
        fallback: false,
    };
}

export default function CategoryPage({category, products}) {
    return (
        <React.Fragment>
            <h1 className="text-green-500 text-xl">{category.name}</h1>

            <ProductList products={products} />
        </React.Fragment>
    )
}

