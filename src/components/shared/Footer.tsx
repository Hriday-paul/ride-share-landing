import Link from 'next/link'
import logo from "../../../public/logo.png"
import Image from 'next/image'
import { routs } from './Navbar'

function Footer() {
    return (
        <div className='bg-[#111111] mt-10 md:mt-16 lg:mt-20'>
            <div className='container'>
                {/* -----------sec1--------- */}
                <div className='flex flex-col lg:flex-row gap-5 items-center justify-between py-12 md:py-16 lg:py-20 xl:py-24 lg:px-5 border-b border-strokedark/60'>
                    <h5 className='text-center lg:text-start max-w-sm md:max-w-lg lg:max-w-xl leading-8 md:leading-10 lg:leading-11 font-fustat text-white font-extrabold text-2xl md:text-3xl lg:text-4xl'>Call Now and Book Our Car for Your Next Ride</h5>

                    <div className="relative inline-block z-10 text-start ml-20 px-8 py-3 md:py-4 pl-12 md:pl-16 bg-transparent">
                        {/* Background Shape */}
                        <div
                            className="absolute inset-0 -z-10 bg-primary"
                            style={{
                                WebkitMaskImage:
                                    "url('/footer-cta-btn-mask1-1.png')",
                                maskImage:
                                    "url('/footer-cta-btn-mask1-1.png')",
                                maskSize: "100% 100%",
                                maskRepeat: "no-repeat",
                                WebkitMaskSize: "100% 100%",
                                WebkitMaskRepeat: "no-repeat",
                            }}
                        />

                        {/* Decorative slanted shapes (before/after equivalent) */}
                        <div className="absolute left-[-25px] top-0 h-full w-[20px] rounded-[20px] rotate-[22deg] bg-primary" />
                        <div className="absolute left-[-65px] top-0 h-full w-[20px] rounded-[20px] rotate-[22deg] bg-white" />

                        {/* Content */}
                        <span className="block text-sm font-medium font-fustat text-white mb-1">
                            Call Any Time for Car Booking
                        </span>

                        <Link
                            href="tel:+1 (949) 514-7881"
                            className="block text-lg md:text-xl font-bold font-fustat text-white"
                        >
                            +1 (949) 514-7881
                        </Link>
                    </div>

                </div>

                {/* ---------sec2--------- */}
                <div className="w-full py-10 md:py-12 lg:py-14">
                    <div className="container px-4 sm:px-6 lg:px-8">
                        <div className="">

                            {/* Logo */}
                            <Link href={'/'}>
                                <Image src={logo} loading='eager' alt='logo' className='h-14 md:h-16 lg:h-20 w-auto object-contain mx-auto' />
                            </Link>


                            {/* Menu */}
                            <ul className="text-lg flex items-center justify-center flex-col gap-5 md:flex-row md:gap-12 transition-all duration-500 py-6 md:py-8 lg:py-10 mb-5 md:mb-8 lg:mb-10 border-b border-strokedark/60">

                                {routs.map(rout => {
                                    return <li key={rout?.id}><Link href={rout?.rout} className="text-white/80 hover:text-white duration-200 font-fustat text-base">{rout?.label}</Link></li>
                                })}
                            </ul>

                            {/* Copyright */}
                            <span className="text-sm text-white/60 text-center font-fustat block">
                                © <Link href="/">Advantage Ride</Link> {new Date().getFullYear()}, All rights reserved.
                            </span>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer