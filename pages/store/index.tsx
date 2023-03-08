// 'use client'

import Navbar from '../../app/_components/Navbar'
import Footer from '../../app/_components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import './Product.css'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

export async function getStaticProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  )
  const { data } = await supabaseAdmin
    .from('Products')
    .select('*')
    .order('id')
  console.log(data)
  return {
    props: {
      products: data,
    },
  }
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Product = {
  id: number
  name: string
  price: number
  imageUrl: string
  description: string
}

export default function ProductsPages({ products }: { products: Product[] }) {
  // const products = await getProducts();
  // console.log(Product)
  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="mb-8">Products List:</h1>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products?.map((product) => 
            <Productpage key={product.id} product={product} />
          )}
          {/* <Product /> */}
        </div>
      </div>
      <Footer />
    </>
  )
}

function Productpage({product}: {product: Product}) {
  const [isLoading, setLoading] = useState(true)
  
  return (
    <Link href={`/store/productdetails/${product.id}`} className="group">
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-400">
        <Image
          alt=""
          src={product.imageUrl}
          fill={true}
          className={cn(
            'group-hover:opacity-75 duration-700 ease-in-out object-cover',
            isLoading
              ? 'grayscale blur-2xl scale-110'
              : 'grayscale-0 blur-0 scale-100'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <div className='mt-4 flex grow justify-between'>
        <div className='flex flex-col'>
          <h3 className="text-lg font-medium text-gray-700">{product.name}</h3>
          <p id='description' className="mt-1 max-width leading-tight text-sm font-light text-gray-500">{product.description}</p>
        </div>
        <p className='mt-1 pl-4 whitespace-nowrap text-gray-700 font-normal min-width'>${product.price}</p>
      </div>
    </Link>
  )
}

// function Product ({product}:any) {
//     const {id, title, description, part_number, stock_quantity, brand, image, type, category, condition, price} = product || {};

//     return ( <>
//         <Link href={`/products/${part_number}`}>
//             <div className="outer-wrapper-products">
//                 {/* <div className='image-wrapper'><Image src={`/${id}/${image}`} alt={description} width='300'/></div> */}
//                 <div className="description-wrapper">
//                     <h2>{title}</h2>
//                     <div>{part_number}</div>
//                     <div>`$ {price}`</div>
//                     {/* <button type="button" onClick={handleCartSubmit}><div>Add To Cart</div></button> */}
//                 </div>
//             </div>
//         </Link>
//     </>)
// }
