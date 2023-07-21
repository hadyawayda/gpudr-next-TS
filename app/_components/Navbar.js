'use client'

import CartButton from '../_components/CartButton'
import Link from 'next/link';
import Image from 'next/image';
// import Dropdown from './DropdownMenu'
import './Navbar.css';
import { useState, useEffect } from 'react';

// Add Dark Mode Toggle Button
// Add Sell Your GPU section
// Add Shopping Bag on Mobile Phone screen
// Center Menu Container
// Add User Panel with List of Devices for repair, and ability to track status of each one seperately, 
// with information about the repair upon user request, and notifications when status updates happen.

const Navbar = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    entry.target.classList.add('show')
                } else {
                    entry.target.classList.remove('show')
                }
            })
        })
        document.querySelectorAll('.animate').forEach((el) => observer.observe(el));
    }, [])

    const [cartItems, setCartItems] = useState([]);
    
    return ( <>
        <header className='header animate'>
            <nav className="navbar">
                <Link className='image-wrapper' href="/" alt='main'>
                    <Image className='image-container' alt="gpu logo" src={require("../../public/Images/gpu.jpg")}/>
                </Link>
                <div className='wrap-1'></div>
                <div className="menu-links">
                    <Link href='/pricing'>Pricing</Link>
                    <Link href="/Services">Services</Link>
                    {/**add menu on hover*/}
                    <Link href="/store" className='menu-links'>Store</Link>
                    <div className='ml-2 mr-8 rounded-full py-0.5 px-1.5 text-white text-xs leading-4'>New</div>
                    <Link className='whitespace-nowrap' href="/Mail-In">Mail In Form</Link>
                </div>
                <div className="relative h-24 flex items-center justify-end">
                    <button aria-label="search" className="search" type='button'>
                        {/**add search pop-up with blurred background and full functionality*/}
                        <svg className='search-logo'>
                            <path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"></path>
                        </svg>
                    </button>
                    <div className="hamburger-menu">
                        {/* <Menu /> */}
                    </div>
                    <div className='sign-in-wrapper'>
                        <Link className='sign-in-link' href="/login">Sign in</Link>
                        {/**make sign in wrapper scalable for longer usernames, add welcome username, and also make sign functionality (popup?)*/}
                    </div>
                    {/**Add Cart sub-menu with items count, total price, background blur, scrolling, deleting and increasing quantity functionality also with empty cart button and checkout button, also add total price, and stock count notification in case stock is low */}
                    <div className='hidden lg:flex'>
                        <CartButton/>
                    </div>
                </div>
            </nav>
        </header>
    </> );
}
 
export default Navbar;