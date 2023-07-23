'use client'

import Image from 'next/image'
import Link from 'next/link'
import './Body.css'

const Body = () => {
  return (
    <div className="body-outer-wrapper px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-24">
      <Image
        src={require('../../public/Images/background.jpg')}
        alt="background"
        className="background-image"
      />
      <div className="body-wrapper">
        <section className="pt-36">
          <h1 className="animate mid col-start-1 w-1/2 row-start-2 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-7xl xl:max-w-[43.5rem]">
            Professional Graphics Cards Repair Service.
          </h1>
          <div className="animate late mover w-1/2 col-start-1 row-start-1 h-7 text-xl font-semibold mt-8 leading-7 text-sky-500">
            We fix GPUs only. It&apos;s our specialty.
          </div>
        </section>
        <section className="flex flex-col items-end">
          <div className="flex flex-col w-5/12">
            <h1 className="animate col-start-1 row-start-2 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-7xl xl:max-w-[36rem]">
              High quality repairs that extend your device&apos;s lifespan.
            </h1>
            <div className="animate mid mover col-start-1 row-start-1 h-7 text-xl font-semibold mt-8 leading-7 text-sky-500">
              No problem goes unrectified.
            </div>
          </div>
        </section>
        <section className="w-5/12">
          <h1 className="animate col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-7xl xl:max-w-[43.5rem]">
            Quick, reliable and hassle-free service.
          </h1>
          <div className="animate mid mover col-start-1 row-start-1 h-7 text-xl font-semibold mt-8 leading-7 text-sky-500">
            Pick-up, repair, testing and delivery in less than 2 weeks.
          </div>
        </section>
        <section className="flex flex-col items-end">
          <div className="flex flex-col w-5/12">
            <h1 className="animate col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-7xl xl:max-w-[36rem]">
              Never end your gaming sessions early anymore.
            </h1>
            <div className="animate mid mover col-start-1 row-start-1 h-7 text-xl font-semibold mt-8 leading-7 text-sky-500">
              Say Goodbye to frequent crashes and low framerates.
            </div>
          </div>
        </section>
        <section className="w-5/12">
          <h1 className="animate col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-7xl xl:max-w-[43.5rem]">
            Attention to details and profficiency is our moto.
          </h1>
          <div className="animate mid mover col-start-1 row-start-1 h-7 text-xl font-semibold mt-8 leading-7 text-sky-500">
            Meticulous and clean repairs on every level.
          </div>
        </section>
        <section className="flex flex-col items-end -mb-40">
          <div className="flex flex-col w-5/12">
            <h1 className="animate col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-7xl xl:max-w-[36rem]">
              Upgrade your GPU to unlock its full potential.
            </h1>
            <div className="animate mid mover col-start-1 row-start-1 h-7 text-xl font-semibold mt-8 leading-7 text-sky-500">
              Multiple upgrading options are available on our{' '}
              <Link className="underline" href={'/services'}>
                Services
              </Link>{' '}
              page.
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Body
