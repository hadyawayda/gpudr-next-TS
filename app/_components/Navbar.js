'use client'

// import useState from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Navbar.css';

// Add Dark Mode Toggle Button
// Add Sell Your GPU section
// Add Shopping Bag on Mobile Phone screen
// Center Menu Container
// Add User Panel with List of Devices for repair, and ability to track status of each one seperately, 
// with information about the repair upon user request, and notifications when status updates happen.

const Header = () => {
    // const [cartItems, setCartItems] = useState([]);
    // const [isClosed, setIsClosed] = useState(true);

    // function handleHamburgerMenuToggle () {
    //     if (isClosed === false) {
    //         setIsClosed(true);
    //     }
    //     if (isClosed === true) {
    //         setIsClosed(false);
    //     }
    // };

    return ( <>
        <header className='header'>
            <nav className="navbar">
                <Link className='image-wrapper' href="/" alt='main'>
                    <Image className='image-container' alt="gpu logo" src={require("../../public/Images/gpu.jpg")}/>
                </Link>
                <div className='wrap-1'></div>
                <div className="menu-links">
                    <Link href="/Services">Services</Link>
                    {/**add menu on hover*/}
                    <Link href="/store">Store</Link>
                    <div>New</div>
                    <Link className='whitespace-nowrap' href="/Mail-In">Mail In Form</Link>
                </div>
                <div className="flex-container">
                    <button className="search" type='button'>
                        {/**add search pop-up with blurred background and full functionality*/}
                        <svg className='search-logo'>
                            <path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"></path>
                        </svg>
                    </button>
                    <button className="hamburger-menu" type='button'>
                        {/**add hamburger menu with blurred background*/}
                        <svg className="hamburger-logo" viewBox="0 0 24 24">
                            <path d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5" fill="none" strokeWidth="1.5" strokeLinecap="round"></path>
                        </svg>
                    </button>
                    <div className='sign-in-wrapper'>
                        <Link className='sign-in-link' href="/login">Sign in</Link>
                        {/**make sign in wrapper scalable for longer usernames, add welcome username, and also make sign functionality (popup?)*/}
                    </div>
                    <button className="cart-wrapper-outer">
                        <div className="cart-wrapper">
                            {/**Add Cart sub-menu with items count, total price, background blur, scrolling, deleting and increasing quantity functionality also with empty cart button and checkout button, also add total price, and stock count notification in case stock is low */}
                            <Image className='cart-logo' alt="cart logo" src={require("../../public/Images/Cart.svg").default}/>
                            <p className='cart'>Cart</p>
                        </div>
                        <div className="cart-items-counter">99</div>
                    </button>
                </div>
            </nav>
        </header>
    </> );
}
 
export default Header;