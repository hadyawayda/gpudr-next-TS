// 'use client'

import Navbar from '../../app/_components/Navbar'
import Footer from '../../app/_components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import './Product.css'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

type Product = {
  id: number
  name: string
  price: number
  imageUrl: string
  description: string
}

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

export default function ProductsPages({ products }: { products: Product[] }) {
  // const products = await getProducts();
  // console.log(Product)
  return (
    <>
      <Navbar />
      <div className="mx-auto py-16 px-4 sm:py-24 sm:px-12 md:px-14 lg:px-12 max-w-xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl">
        <h1 className="mb-8">Products List:</h1>
        <div className="grid gap-y-10 md:gap-y-14 gap-x-4 sm:gap-x-8 xl:gap-x-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
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
      <div className='mt-2 md:mt-3 flex flex-col gap-1 justify-between'>
        <div className='flex justify-between items-start max-h-14 overflow-hidden'>
          <h4 className="flex items-start max-h-12 text-sm sm:text-base md:text-lg 
          sm:leading-snug md:leading-tight font-medium break-all text-gray-700">{product.name}ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</h4>
          <div className='pl-4 min-w-max pt-px flex items-center h-full text-gray-700
          text-sm sm:text-base lg:text-lg font-normal'>$ {product.price}.12</div>
        </div>
        <p className="sm:mt-1 md:mt-1.5 max-h-12 md:max-h-14 break-words overflow-hidden leading-none sm:leading-none text-xs md:text-sm font-light text-gray-500">{product.description}ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</p>
      </div>
    </Link>
  )
}