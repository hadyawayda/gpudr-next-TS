// import Link from 'next/link';
import Image from 'next/image';
import './Body.css'

const Body = () => {
    return ( <>
        <div className='body-outer-wrapper'>
            <Image src={require("../../public/Images/background.jpg")} alt="background" className="background-image"/>
            <div className='body-wrapper'>
                <div className=''>
                    <h1 className='col-start-1 row-start-2 mt-4 max-w-[36rem] text-xl font-extrabold tracking text-slate-900 sm:text-7xl xl:max-w-[43.5rem]'>Professional Graphics Cards Repair Service.</h1>
                    <div className='col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-sky-500'>We exceed your expectations on every level.</div>
                </div>
                <div>
                    <h1 className='col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]'>Professional Graphics Cards Repair Service.</h1>
                    <div className='col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-sky-500'>We exceed your expectations on every level.</div>
                </div>
                <div>
                    <h1 className='col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]'>Professional Graphics Cards Repair Service.</h1>
                    <div className='col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-sky-500'>We exceed your expectations on every level.</div>
                </div>
                <div>
                    <h1 className='col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]'>Professional Graphics Cards Repair Service.</h1>
                    <div className='col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-sky-500'>We exceed your expectations on every level.</div>
                </div>
                <div>
                    <h1 className='col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]'>Professional Graphics Cards Repair Service.</h1>
                    <div className='col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-sky-500'>We exceed your expectations on every level.</div>
                </div>
                <div>
                    <h1 className='col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]'>Professional Graphics Cards Repair Service.</h1>
                    <div className='col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-sky-500'>We exceed your expectations on every level.</div>
                </div>
            </div>
        </div> 
    </> );
}
 
export default Body;