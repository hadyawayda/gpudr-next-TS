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
          behavior: 'smooth' // for smoothly scrolling
        });
      };

    return ( <>
            <footer className="footer-wrapper">
                <div id="top" className="socials-1">
                    <Logos/>
                </div>
                <div className="footer-upper-section">
                    <div className="footer-upper-section-wrapper">
                        <div className="logo-wrapper">
                            <Image className='image-wrapper' alt="gpu logo" src={require("../../public/Images/gpucore.jpg")}/>
                        </div>
                        <div className='index-wrapper'>
                            <h4 className='headings'>Index</h4>
                            <p>Home</p>
                            <p>Services</p>
                            <p id='mail-in'>Mail In</p>
                        </div>
                        <div className="support-wrapper">
                            <h4 className='headings'>Support</h4>
                            <p>Shipping Policy</p>
                            <p>Return Policy</p>
                            <p>Privacy Policy</p>
                        </div>
                        <div className="help-wrapper">
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
                </div>
                <div className="footer-lower-section">
                    <div className="footer-lower-section-wrapper">
                        <div className='terms-wrapper'>
                            <p className='copyright-wrapper'>2023 © GPU Doctor</p>
                            <p className='terms-of-use-wrapper'><Link href="https://www.gpudoctor.com/terms" >Terms of use</Link></p>
                        </div>
                        <div className="socials-3">
                            <Logos/>
                        </div>
                        <div className='top-wrapper'>
                            <button onClick={scrollToTop} className="back-to-top">Back To Top</button>
                        </div>
                    </div>
                </div>
            <Menu />
            </footer>
    </>);
}
 
export default Footer;