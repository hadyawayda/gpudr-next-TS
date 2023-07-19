import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export async function getServerSideProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  )
  const { data } = await supabaseAdmin
    .from('Products')
    .select('*')
    .order('id')
  return {
    props: {
      products: data,
    },
  }
}

export default function ProductPage(data: any) {
  
  const [count, setCount] = useState<number>(1);
  const router = useRouter();
  const { id } = router.query as { id: string };
  const product = data?.products?.find((p:any) => p.id === Number(id)) ?? null;
  const { name, description, imageUrl, category, brand, price, stock, longName, longDescription } = product ?? {};
  
  let intervalId:any = null;

  function handleIncrementClick() {
    if (count >= 0) {
      let intervalId = setInterval(() => {
        setCount(count => Number(count) + 1)
        }, 100)
      const handleMouseUp = () => {
        clearInterval(intervalId)
      }
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchend', handleMouseUp)
    }
    }

  function handleDecrementClick() {
  if (count > 0) {
    setCount(count => Math.max(Number(count) - 1, 1))

    let intervalId:any = null;
    intervalId = setInterval(() => {
      setCount(count => Math.max(Number(count) - 1, 1))
    }, 100)
    const handleMouseUp = () => {
      clearInterval(intervalId)
    }
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('touchend', handleMouseUp)
    }
  }

  function handleAddToCart() {
  }

  function handleBuyNow() {
  }

  function handleRequestStock() {
    
  }
  
  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto py-2 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-0 sm:flex-col">
        <div className="flex flex-row items-start mb-16 max-w-7xl">
          <Link href={'/store'}>
            <button className="py-2 mr-1 lg:px-8 lg:ml-4">
              Products &gt;
            </button>
          </Link>
          {category
            ? <Link href={`/store/${category}`}>
              <span className="py-2 mr-1">{category} &gt;</span>
              </Link>
            : <span></span>
          }
          {brand
            ? <Link href={`/store/${brand}`}>
              <span className="py-2 mr-1">{brand} &gt;</span>
              </Link>
            : <span></span>
          }

        </div>
        <div className="flex flex-row justify-between lg:px-16">
          <div className="max-w-xs lg:ml-2 flex justify-center flex-col">
            <h1 className="mb-12 lg:hidden">{name}</h1>
            <Image className="mb-20 max-w-2xl rounded-lg" src={imageUrl} alt={description} width={320} height={320} />
          </div>
          <div className="hidden w-80 lg:ml-4 lg:flex justify-start flex-col">
            <div>
              <h1>{name}</h1>
              <h1>{longName}</h1>
            </div>
            <div>
              $ {price}
            </div>
            <div>
              {longDescription}
            </div>
          </div>
          <div className="hidden max-w-sm px-4 py-2 rounded-lg bg-slate-200 lg:ml-4 lg:flex justify-between items-center flex-col">
            <div className="mt-4 w-44">
              <h2>$ {price} </h2>
            </div>
            <div className="my-8 pr-1.5">
              Free Delivery & Returns.
            </div>
            <div  className="my-16 mt-16">
              {stock
                ? ( stock > 10 ? <h2> In Stock </h2> : <h2> Only {stock} left in Stock!</h2>)
                : <div className="flex flex-col justify-between items-center">
                    <h2 className="mb-4">Out of stock!</h2>
                    <button className="bg-cyan-400 rounded-lg text-slate-100 py-2.5 px-6" onClick={handleRequestStock}>Request Stock</button>
                  </div>
              }
            </div>
            <div className="mb-8 flex items-center flex-col">
              <div className="mb-8 flex justify-between w-24">
                <button className="bg-emerald-200 w-7 px-2 py-0 rounded-sm" disabled={count === 1} onMouseDown={handleDecrementClick} onTouchStart={handleDecrementClick} onMouseUp={() => clearInterval(intervalId)} onTouchEnd={() => clearInterval(intervalId)}>
                  -
                </button>
                <input aria-label="quantity" value={count} min={1} onChange={e => setCount(parseInt(e.target.value) || 1)} type="number" className="w-8 mx-2 rounded-sm text-center bg-sky-200" />
                <button className="bg-orange-400 w-7 px-2 rounded-sm" onMouseDown={handleIncrementClick} onTouchStart={handleIncrementClick} onMouseUp={() => clearInterval(intervalId)} onTouchEnd={() => clearInterval(intervalId)}>
                  +
                </button>
              </div>
              <div className="flex justify-between w-28 mb-8">
                <div>
                  Total
                </div>
                <div>$ {parseInt(price) * count}</div>
              </div>
              <div className="mb-8 flex justify-center">
                <button onClick={handleAddToCart} className="bg-amber-500 rounded-lg text-slate-100 py-2.5 px-6">Add To Cart</button>
              </div>
              <div className="mb-8 flex justify-center">
                <button onClick={handleBuyNow} className="bg-amber-400 rounded-lg text-slate-100 py-2.5 px-6">Buy Now</button>
              </div>
            </div>
          </div>
        </div> 
        <div className="max-w-xs lg:ml-24 flex justify-center flex-col lg:hidden">
          <h3 className="break-words mb-12 lg:hidden" style={{ inlineSize: '320px' }}>{description}</h3>
          <div className="flex justify-between max-w-xs mb-12 lg:hidden">
            Price:
            <h2 className="">$ {price}</h2>
          </div>
          <div className='flex justify-between items-center mt-2 lg:hidden'>
            <div className="flex justify-between flex-col">Quantity:
              <div className="w-24 flex justify-between">
                <button className=" w-7 px-0 pb-0 rounded-sm" disabled={count === 1} onMouseDown={handleDecrementClick} onTouchStart={handleDecrementClick} onMouseUp={() => clearInterval(intervalId)} onTouchEnd={() => clearInterval(intervalId)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="rgba(156,223,212)" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <input value={count} aria-label="quantity" min={1} onChange={e => setCount(parseInt(e.target.value) || 1)} type="number" className="w-8 mx-2 rounded-sm text-center bg-sky-200" />
                <button className="w-7 pb-0 px-0 rounded-sm" onMouseDown={handleIncrementClick} onTouchStart={handleIncrementClick} onMouseUp={() => clearInterval(intervalId)} onTouchEnd={() => clearInterval(intervalId)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="rgba(242,223,212)" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <button className="p-4 rounded-lg bg-emerald-300 text-stone-600 lg:hidden" onClick={handleAddToCart}>Add to cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}