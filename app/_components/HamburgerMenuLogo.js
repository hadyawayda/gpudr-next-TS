'use client'

// learn react lazy loading
// learn react suspense

import { useState } from "react";
import './HamburgerMenuLogo.css';

const Menu = () => {
    const [open, setOpen] = useState(" open");

    function handleMenuToggle () {
        (open === " open") ? setOpen("") : setOpen(" open")
    }

    return ( 
        <div className={"menu-btn" + open} onClick={handleMenuToggle}>
            <div className="a"></div>
            <div className="b"></div>
            <div className="c"></div>         
        </div> );
}
 
export default Menu;
