'use client'

// learn react lazy loading
// learn react suspensimport { useState } from 'react'
import { useState } from "react";
import './HamburgerMenuLogo.css'

const Menu = () => {
  const [open, setOpen] = useState(' open')

  function handleMenuToggle() {
    open === ' open' ? setOpen('') : setOpen(' open')
  }
  console.log(open)

  return (
    <div className={'menu-btn' + open} onClick={handleMenuToggle}>
      <div className="menu-btn__burger"></div>
    </div>
  )
}

export default Menu;