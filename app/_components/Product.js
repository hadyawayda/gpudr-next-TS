import { data } from "autoprefixer";
import Image from "next/image";
import Link from "next/link";
import './Products.css';
// import { useState } from 'react';


async function getProducts () {
    const res = await fetch('http://127.0.0.1:8090/api/collections/procucts/records?page=1&perPage=30');
    const data = await res.json();
    return data?.items;
}

export default async function Product () {
    const products = await getProducts();

    return (
        <div>
            <h1>Products List:</h1>
            <div className="product-page-wrapper">
                {products?.map((product) => {
                    return <Products key={product.id} product={product} />
                })}
            </div>
        </div>
    )
}

function Products ({product}) {
    const {id, title, description, part_number, stock_quantity, brand, image, type, category, condition, price} = product || {};

    return (
        <Link href={`/products/${part_number}`}>
            <div className="outer-wrapper-products">
                <div className='image-wrapper'><Image src={`/${id}/${image}`} alt={description} width={300}/></div>
                <div className="description-wrapper">
                    <h2>{title}</h2>
                    <div>{part_number}</div>
                    <div>`$ {price}`</div>
                    <button type="button" onClick={handleCartSubmit}><div>Add To Cart</div></button>
                </div>
            </div>
        </Link>
    )
}