import Link from "next/link";

import Product from "./product";

export default function ProductList({products}){
    if(!products) return null;

    return(
        <ul>
            {products.map((product) =>(
                <li key={product.permalink}>
                    <Link legacyBehavior href={`/products/${product.permalink}`}>
                        <a>
                            <Product {...product}/ >
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
}