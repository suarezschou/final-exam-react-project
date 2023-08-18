import Link from "next/link";

import Product from "./product";

export default function ProductList({products}){
    if(!products) return null;

    return(
        <ul className="grid gap-4 grid-cols-2 text-lg">
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