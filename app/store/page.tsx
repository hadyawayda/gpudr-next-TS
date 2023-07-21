'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import Navbar from '../../app/_components/Navbar'
import Footer from '../../app/_components/Footer'
import Image from 'next/image'
import Link from 'next/link'

type Product = {
  id: number
  name: string
  price: number
  imageUrl: string
  description: string
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Products() {

  const [products, setProducts] = useState <Product[] | null > (null)
  const [error, setError] = useState ('')
  const [loading, setIsLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const supabaseAdmin = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL || '',
          process.env.NEXT_PUBLIC_SUPABASE_KEY || ''
        )
        const { data } = await supabaseAdmin
          .from('Products')
          .select('*')
          .order('id')
        console.log('hi')
        setError('')
        setProducts(data)
      }
      catch (err: Error | unknown) {
        console.error(err)
        console.log((err as Error).stack)
        setError((err as Error).toString())
      }
      finally {
        setIsLoading(false)
      }
    }
    
    (async () => await getData())();
  }, [])

  return (
    <div>
      { loading 
      ? <div className='justify-center items-center flex my-40'>Loading...</div>
      : <main>
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="mb-8">Products List:</h1>
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products?.map((product:Product) =>
                <ProductCard key={product.id} product={product} />
              )}
            </div>
          </div>
          <div>
            {error && <p className='justify-center items-center flex text-red-500'>{error}</p>}
          </div>
        </main>
      }
    </div>
  )
}

function ProductCard({product}: {product: Product}) {
  const [isLoading, setLoading] = useState(true)
  
  return (
    <Link href={`/products/${product.id}`} className="group">
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
          <p className="mt-1 max-width leading-tight text-sm font-light text-gray-500">{product.description}</p>
        </div>
        <p className='mt-1 whitespace-nowrap text-gray-700 font-normal min-width'>${product.price}</p>
      </div>
    </Link>
  )
}