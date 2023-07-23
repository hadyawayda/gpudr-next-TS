'use client'

import Logos from './Socials.js';
import Link from 'next/link';
import Image from 'next/image';
import './Footer.css';
import Menu from './HamMenu';


const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    return ( 
      <footer className="footer-wrapper mt-20 md:mt-0 lg:px-20 w-full flex flex-col justify-start items-center font-medium text-lg">
        <div id="top" className="socials-1 flex justify-center p-20 animate md:hidden mb-20">
          <Logos/>
        </div>
        <div className="lg:pt-10 lg:pb-20 flex justify-center py-10 md:py-20 animate w-full items-start grow flex-wrap flex-row md:flex-nowrap">
          <div className="flex items-center h-24 w-1/2 pl-10 lg:w-4/12">
            <Image className='h-12 w-12' alt="gpu logo" src={require("../../public/Images/gpucore.jpg")}/>
          </div>
          <div className='index-wrapper pl-12'>
            <h4 className='headings'>Index</h4>
            <p>Home</p>
            <p>Services</p>
            <p id='mail-in'>Mail In</p>
          </div>
          <div className="support-wrapper pl-12">
            <h4 className='headings'>Support</h4>
            <p>Shipping Policy</p>
            <p>Return Policy</p>
            <p>Privacy Policy</p>
          </div>
          <div className="help-wrapper pl-12">
            <h4 className='headings' id="need-help">Need Help?</h4>
            <div className='contact-us-wrapper'>
            <p className='contact-us' id='contact-us'>Contact Us </p>
              <Link rel="noreferrer" className=' ml-2' target="_blank" href="https://wa.me/96176941100">
                <Image className="contact-links-1" alt="WhatsApp" src={require("../../public/Images/WhatsApp.svg").default}/>
              </Link>
              <Link rel="noreferrer" className='' target="_blank" href="mailto:hady_awayda@hotmail.com" >
                <Image id='email-logo' alt="Email" src={require("../../public/Images/Email.svg").default}/>
              </Link>
            </div>
            <p>About Us</p>
            <p>FAQ</p>
          </div>    
        </div>
        <div className="flex justify-center w-full px-12 h-96 items-center">
          <div className="footer-lower-section-wrapper animate py-20 flex items-center h-60 w-full justify-between grow">
            <div className='flex justify-between flex-col-reverse lg:ml-6'>
              <p className='copyright-wrapper'>2023 © GPU Doctor</p>
              <p className='terms-of-use-wrapper'><Link href="https://www.gpudoctor.com/terms" >Terms of use</Link></p>
            </div>
            <div className="hidden md:flex">
              <Logos/>
            </div>
            <div className='flex justify-center items-center'>
              <button onClick={scrollToTop} className="back-to-top text-xs px-6 py-3 leading-loose mr-6 rounded-full text-slate-800 border-2 border-slate-300">Back To Top</button>
            </div>
          </div>
        </div>
        <Menu />
      </footer>
    );
}
 
export default Footer;