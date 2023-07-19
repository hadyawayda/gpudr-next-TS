'use client'

// learn react lazy loading
// learn react suspensimport { useState } from 'react'

// make it disappear after swipe
// also make the hamburger menu button stay on top even if we put the menu as the last item

import { useEffect, useState } from "react";
import './HamburgerMenuLogo.css'

const Menu = () => {
  const [open, setOpen] = useState('')

  function handleMenuToggle() {
    open === ' open' ? setOpen('') : setOpen(' open')
  }
  useEffect(() => {
    const body = document.querySelector('body');
      
    if (open === ' open') {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
  }, [open]);

  useEffect(() => {
    function handleResize() {
      setOpen('');
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  })
  
  useEffect(() => {
    function handleSwipeStart(e) {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        const startX = touch.pageX;
        const startY = touch.pageY;

        function handleSwipeMove(e) {
          const touch = e.touches[0];
          const deltaX = touch.pageX - startX;
          const deltaY = touch.pageY - startY;

          if (deltaX > 50 && Math.abs(deltaY) < 20) {
            setOpen('');
          }
        }

        window.addEventListener('touchmove', handleSwipeMove);

        function handleSwipeEnd() {
          window.removeEventListener('touchmove', handleSwipeMove);
          window.removeEventListener('touchend', handleSwipeEnd);
        }

        window.addEventListener('touchend', handleSwipeEnd);
      }
    }

    window.addEventListener('touchstart', handleSwipeStart);

    return () => {
      window.removeEventListener('touchstart', handleSwipeStart);
    };
  }, []);

  return (
    <div className=" md:hidden">
      <div className={'menu-btn' + open} onClick={handleMenuToggle}>
        <div className="menu-btn__burger"></div>
      </div>
      <div id="headlessui-portal-root" className={'ham-menu' + open}>
        <div data-headlessui-portal="">
          <div className="fixed inset-0 z-50 overflow-hidden lg:hidden" id="headlessui-dialog-10" role="dialog" aria-modal="true" data-headlessui-state="open" aria-labelledby="headlessui-dialog-title-12">
            <div className="absolute inset-0 bg-slate-900/25 backdrop-blur-sm transition-opacity opacity-100 ham-menu-blur"></div>
            <div className="fixed inset-0 flex items-start justify-end overflow-y-auto translate-x-0 ham-menu-open">
              <div className="grow h-full" onClick={handleMenuToggle}></div>
              <div className="min-h-full w-[min(20rem,calc(100vw-theme(spacing.10)))] bg-white shadow-2xl ring-1 ring-black/10" id="headlessui-dialog-panel-11" data-headlessui-state="open">
                <nav className="divide-y divide-slate-900/10 text-base leading-7 text-slate-900">
                  <div className="py-11 px-8">
                    <a className="block w-9 overflow-hidden" href="/"></a>
                  </div>
                  <div className="py-6 px-8">
                    <div className="-my-2 items-start space-y-2">
                      <a className="block w-full py-2 font-semibold" href="/components">Services</a>
                      <a className="flex w-full items-center py-2 font-semibold" href="/templates">Store</a>
                      <a className="block w-full py-2 font-semibold" href="/documentation">Mail-In Form</a></div></div><div className="py-6 px-8"><div className="-my-2 space-y-4">
                      <a className="block w-full py-2 font-semibold" href="/login">Sign in</a>
                    <a className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 w-full" href="/all-access"><span>Sell Your GPU <span aria-hidden="true">→</span></span></a>
                  </div>
                  </div>
                </nav>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;