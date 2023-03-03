import Link from 'next/link';
import Image from 'next/image';
import './Socials.css';

const Logos = () => {
    return ( <>
        <div className='logos-wrapper'>
            <Link className='link-wrapper' target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/channel/UCoSiqKkT0i460xJA_JFFoFQ">
                <Image className='social-logos' src={require("../../public/Images/YouTube.svg").default} alt="YouTube" />
            </Link>
            <Link className='link-wrapper' target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/gpu.doctor/">
                <Image  className='social-logos' src={require("../../public/Images/Instagram.svg").default} alt="Instagram"/>
            </Link>
            <Link className='link-wrapper' target="_blank" rel="noreferrer noopener" href="https://www.tiktok.com/@gpudoctor">
                <Image className='social-logos' src={require("../../public/Images/TikTok.svg").default} alt="TikTok"/>
            </Link>
            <Link className='link-wrapper' target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/hady.laiho">
                <Image className='social-logos' src={require("../../public/Images/Facebook.svg").default} alt="Facebook"/>
            </Link>
        </div>
    </> );
}
 
export default Logos;