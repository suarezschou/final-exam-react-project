export default function Product({name, price}){
    return (
        <>
        <p className="text-orange-500">
            {name}:
        </p>
        <p>{price.formatted_with_symbol}</p>
        </>
    );
}