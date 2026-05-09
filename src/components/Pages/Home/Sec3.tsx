import React from 'react'
import img1 from "../../../../public/sec3/about-thumb1-1.jpg"
import img2 from "../../../../public/sec3/about-thumb1-2.jpg"
import Image from 'next/image'
import { BsCheck2Circle } from "react-icons/bs";
import Link from 'next/link';


function Sec3() {
    return (
        <div className='bg-[url(/sec3/pattern.png)] bg-center py-12 md:py-16 lg:py-20 mt-24 md:mt-28 lg:mt-32 xl:mt-40'>
            <div className='container'>
                <div className='grid grid-cols-1 xl:grid-cols-12 gap-10 font-fustat'>
                    <div className='col-span-7'>
                        <div className='inline-flex flex-wrap gap-6 relative'>
                            {/* -----img 1--------- */}
                            <div className='rounded-2xl overflow-hidden'>
                                <Image placeholder='blur' src={img1} className='w-full h-auto object-cover' alt='about img' />
                            </div>
                            <div className='rounded-2xl self-end overflow-hidden'>
                                <Image placeholder='blur' src={img2} className='w-full h-auto object-cover' alt='about img' />
                            </div>

                            {/* <div className="absolute bottom-20 right-6 h-28 w-28 md:top-10 md:-right-4 md:h-[200px] md:w-[200px]">
                                <div className="relative mx-auto inline-flex h-24 w-24 items-center justify-center rounded-full md:h-[158px] md:w-[158px]">

                                    <span
                                        className="
                absolute left-1/2 top-1/2
                z-[1]
                inline-block
                h-[121px] w-[115px]
                -translate-x-1/2 -translate-y-1/2
                animate-[spin_20s_linear_infinite]
                rounded-full
                text-center
                text-[10px]
                font-medium
                leading-normal

                md:h-[200px]
                md:w-[200px]
                md:text-[18px]
            "
                                    >
                                        {"Years of experiences ** Years of experiences ** Years of experiences **"
                                            .split("")
                                            .map((char, indx) => (
                                                <span
                                                    key={indx}
                                                    style={{
                                                        transform: `rotate(${5 * indx + 1}deg)`,
                                                    }}
                                                    className="
                            absolute
                            left-[44.5%]
                            top-0
                            h-[60px]
                            w-[12px]
                            origin-bottom
                            font-normal
                            text-gray-600

                            md:top-[-5px]
                            md:h-[105px]
                            md:w-[20px]
                        "
                                                >
                                                    {char}
                                                </span>
                                            ))}
                                    </span>

                                    <div
                                        className="
                absolute left-1/2 top-1/2
                flex h-[90px] w-[90px]
                -translate-x-1/2 -translate-y-1/2
                items-center justify-center
                rounded-full
                bg-primary
                text-3xl
                font-medium
                leading-none
                text-white

                md:h-[138px]
                md:w-[138px]
                md:text-5xl
            "
                                    >
                                        <span>10</span>+
                                    </div>
                                </div>
                            </div> */}

                            <div className="absolute bottom-20 right-10 md:bottom-0 md:right-0 h-28 w-28 md:top-4 md:bottom-auto md:h-[200px] md:w-[200px] flex items-center justify-center">
                                <div className="relative inline-flex h-24 w-24 items-center justify-center rounded-full md:h-[158px] md:w-[158px]">
                                    <span
                                        className="
                    absolute left-1/2 top-1/2
                    z-[1]
                    inline-block
                    h-[121px] w-[115px]
                    -translate-x-1/2 -translate-y-1/2
                    animate-[spin_20s_linear_infinite]
                    rounded-full
                    text-center
                    text-[10px]
                    font-medium
                    leading-normal
                    md:h-[200px]
                    md:w-[200px]
                    md:text-[18px]
                "
                                    >
                                        {"Years of experiences ** Years of experiences ** Years of experiences **"
                                            .split("")
                                            .map((char, indx) => (
                                                <span
                                                    key={indx}
                                                    style={{ transform: `rotate(${5 * indx + 1}deg)` }}
                                                    className="
                                absolute
                                left-[44.5%]
                                top-0
                                h-[60px]
                                w-[12px]
                                origin-bottom
                                font-normal
                                text-gray-600
                                md:top-[-5px]
                                md:h-[105px]
                                md:w-[20px]
                            "
                                                >
                                                    {char}
                                                </span>
                                            ))}
                                    </span>

                                    <div
                                        className="
                    absolute left-1/2 top-1/2
                    flex h-[90px] w-[90px]
                    -translate-x-1/2 -translate-y-1/2
                    items-center justify-center
                    rounded-full
                    bg-primary
                    text-3xl
                    font-medium
                    leading-none
                    text-white
                    md:h-[138px]
                    md:w-[138px]
                    md:text-5xl
                "
                                    >
                                        <span>10</span>+
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-span-5 space-y-3.5 md:space-y-4 lg:space-y-5'>
                        <div className='inline-flex items-center gap-x-3'>
                            <div className='inline-flex items-center'>
                                <span className='inline-block bg-primary w-4 h-[13px]' style={{ clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)" }}></span>
                                <span className='inline-block bg-primary w-[10px] h-[13px]' style={{ clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)" }}></span>
                                <span className='inline-block bg-primary w-[10px] h-[13px]' style={{ clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)" }}></span>
                                <span className='inline-block bg-gray-950 w-[10px] h-[13px]' style={{ clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)" }}></span>
                            </div>
                            <p className='text-black font-fustat text-lg md:text-xl lg:text-2xl font-bold'>About Our Company</p>
                        </div>
                        <h4 className='text-2xl md:text-4xl lg:text-5xl leading-8 md:leading-10 lg:leading-12 font-extrabold font-fustat'>Fast & Easy Ride Booking at Your Fingertips</h4>
                        <p className='text-gray-500 font-fustat font-medium'>Our Ride Booking Service is designed to make your travel experience fast, safe, and convenient — whether you're heading to work, the airport, or just exploring the city.</p>
                        <div>
                            <ul>
                                {["Instant & Advance Booking Options", "Real-Time Ride Tracking", "Professional & Verified Drivers", "Affordable & Transparent Pricing"].map(i => {
                                    return <li key={i} className="flex gap-3 items-center leading-8 md:leading-9 lg:leading-10 text-base md:text-lg font-fustat font-bold text-gray-700">
                                        <BsCheck2Circle className='size-6' />
                                        {i}
                                    </li>
                                })}
                            </ul>
                        </div>
                        <Link href="/contact" className="group relative inline-flex py-3 text-sm md:text-base items-center justify-center rounded-md bg-primary px-7 md:px-11 font-semibold text-white transition hover:scale-105 cursor-pointer font-fustat overflow-hidden">
                            <span>Book a Ride</span>
                            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                                <div className="relative h-full w-8 bg-white/20"></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sec3