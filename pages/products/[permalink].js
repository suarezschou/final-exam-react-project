import commerce from "../../lib/commerce";
import React from "react";
import { useCartDispatch } from "../../context/cart";

export async function getStaticProps({params}){
    const {permalink} = params;

    const product = await commerce.products.retrieve(permalink,{
        type: 'permalink',
    });

    return{
        props: {
            product,
        },
    };
}

export async function getStaticPaths(){
    const {data:products} = await commerce.products.list();

    return{
        paths: products.map((products) => ({
            params: {
                permalink: products.permalink,
            },
        })),
        fallback:false,
    };
}

export default function ProductPage({product}) {
    const {setCart} = useCartDispatch()

    const addToCart = () => commerce.cart.add(product.id).then(({cart}) => setCart(cart));

    
    return (
        <React.Fragment>
            <h1 className="text-lg text-orange-500">{product.name}</h1>
            <p>{product.price.formatted_with_symbol}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </React.Fragment>
    )
}