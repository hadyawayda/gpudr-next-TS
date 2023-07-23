'use client'

/* eslint-disable react-hooks/exhaustive-deps */
import { Popover , Transition} from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Trash from './trash2'

export default function CartButton() {
  const [subtotal, setSubtotal] = useState(0)
  const [solutions, setSolutions] = useState([
    {
    name: 'Hadyaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    href: 'asdas',
    description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    price: 1048.99,
    quantity: 2
    },
    {
      name: 'awayda',
      href: 'asdas',
      description: 'lelelele',
      price: 231,
      quantity: 3
    },
    {
      name: 'roumieh',
      href: 'asdas',
      description: 'lelelele',
      price: 17.4,
      quantity: 1
    },
    {
      name: 'lol',
      href: 'asdas',
      description: 'lelelele',
      price: 2.43,
      quantity: 1
    },
    {
      name: 'ok',
      href: 'asdas',
      description: 'lelelele',
      price: 78,
      quantity: 1
    },
    {
      name: 'whatever',
      href: 'asdas',
      description: 'lelelele',
      price: 34,
      quantity: 1
    },
    {
      name: 'nice',
      href: 'asdas',
      description: 'lelelele',
      price: 63.2,
      quantity: 1
    }
  ])

  function calculateSubtotal () {
    let total = 0;
    solutions.forEach((item) => {
      total += item.price*item.quantity;
    });
    setSubtotal(Number(total.toFixed(2)));
  }

  function handleDeleteItem (id) {
    setSolutions(solutions.filter((x) => x.name !== id))
  }
  
  useEffect(() => {
    calculateSubtotal()
  },[solutions])
  
  useEffect(() => {
    calculateSubtotal()
  },[])
  
  return (
      <Popover className="relative flex justify-end">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                group flex justify-between items-center rounded-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 
                px-4 py-2 font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 cart-wrapper h-11`}
            >
              <div className='relative tracking-tight pl-0.5 cart-word'>Cart</div>
              <div>
                <Image className='cart-logo top-4' alt="cart logo" src={require("../../public/Images/Cart.svg").default}/>
              </div>
            </Popover.Button>
            <div className='w-0'>
              <div className="relative flex justify-center items-center text-black z-0 bg-gray-300 w-6 h-6 text-xs rounded-full -left-3.5 cart-counter">{solutions.length >= 99 ? 99 : solutions.length}</div>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="fixed top-24 right-14 font-semibold overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  { solutions.length === 0 
                    ? <div className='flex justify-center items-center cart-upper bg-gray-50'>
                        <div className='italic '>
                          Your cart is empty.
                        </div>
                      </div>
                    : <div className="overflow-y-scroll z-50 scrollbar-thin scrollbar-track-rounded-full relative flex flex-col justify-start gap-2 bg-white pt-4 px-4 cart-upper">
                      {solutions.map((item) => (
                        <div key={item.name} className='flex flex-col'>
                          <div className='flex justify-between h-full'>
                            <a
                              href={item.href}
                              className="flex w-full overflow-hidden height justify-between items-center rounded-lg pt-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                            >
                              <div className='w-20 h-20'>
                              </div>
                              <div className='ml-4 w-full h-full overflow-hidden'>
                                <p className="text-base pb-1 truncate text-gray-900 ">
                                  {item.name} 
                                </p>
                                <p className="text-sm truncate font-normal text-gray-500">
                                  {item.description}
                                </p>
                                <div className='text-xs pt-1.5 italic font-medium'>
                                  <span className='pr-3'>quantity:</span>  
                                  <span>x{item.quantity}</span>
                                </div>
                              </div>
                            </a>
                            <div className='flex flex-col justify-between items-end w-24 height pt-2'>
                              <button className='' onClick={() => handleDeleteItem(item.name)}>
                                <Trash />
                              </button>
                              <div className='font-medium pb-2'>
                                $ {item.price * item.quantity}
                              </div>
                            </div>
                          </div>
                          { solutions.length === 1 || item.name === solutions[solutions.length - 1].name
                            ?  null
                            : <div className='w-full flex justify-center'>
                                <div className='border-t mt-2 w-4/6 '></div>
                            </div>
                          }
                        </div>
                      ))}
                  </div>
                  }
                  <div className="bg-gray-100 border-t-2 py-2 px-10 flex flex-col font-semibold">
                    <div className='flex flex-col p-1'>
                      <div className='flex justify-between my-1'>
                        <div>Subtotal:</div>
                        <div>$ {subtotal}</div>
                      </div>
                      <div className='flex justify-between my-1'>
                        <div>Shipping:</div>
                        <div>Calculated at Checkout</div>
                      </div>
                    </div>
                    <div className='flex justify-between pt-2.5 pb-3'>
                      <Link
                        href="/checkout"
                        className="flow-root rounded-xl h-10 py-2 px-10 transition duration-500 ease-in-out bg-white text-base font-semibold hover:bg-orange-500 hover:text-white text-slate-800
                        focus:outline-none focus-visible:ring focus-visible:ring-orange-500"
                      >
                        Checkout
                      </Link>
                      <Link 
                        href='/cart'
                        className='flow-root rounded-xl h-10 py-2 px-8 transition duration-500 ease-in-out bg-white text-base font-semibold hover:bg-orange-500 hover:text-white text-slate-800
                        focus:outline-none focus-visible:ring focus-visible:ring-orange-500'
                      >
                        View Full Cart
                      </Link>
                    </div>
                  </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
  )
}