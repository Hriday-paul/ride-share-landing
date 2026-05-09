import Image from 'next/image'
import React from 'react'
import googlePlay from "../../../../public/sec5/download-google-play-1.png"
import appleStore from "../../../../public/sec5/download-apple-store-1.png"
import Link from 'next/link'
import mockup from "../../../../public/sec5/Gemini_Generated_Image_6kpvtj6kpvtj6kpv-removebg-preview.png"

function Sec5() {
    return (
        <div className='container mt-0 md:mt-8'>
            <div className='bg-primary w-full relative rounded-4xl'>
                <div className='bg-[url(/hero_pattern.png)] bg-center opacity-5 absolute top-0 left-0 h-full w-full z-10'></div>

                <div className='relative grid grid-cols-1 lg:grid-cols-2 items-center'>

                    <div className='p-10 lg:p-16 xl:p-24 pr-10 lg:pr-0 xl:pr-0 space-y-3 md:space-y-5 w-full relative z-20'>

                        <div className='inline-flex items-center gap-x-2'>
                            <div className='inline-flex items-center'>
                                <span className='inline-block bg-[#f5a623] w-4 h-[13px]' style={{ clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)" }}></span>
                                <span className='inline-block bg-[#f5a623] w-[10px] h-[13px]' style={{ clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)" }}></span>
                                <span className='inline-block bg-[#f5a623] w-[10px] h-[13px]' style={{ clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)" }}></span>
                                <span className='inline-block bg-white w-[10px] h-[13px]' style={{ clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)" }}></span>
                            </div>
                            <p className='text-white font-fustat text-sm font-semibold uppercase'>Download App Now</p>
                        </div>

                        <h3 className='text-3xl md:text-4xl text-white font-fustat font-extrabold'>Get A Free Ride App From Online Store</h3>

                        <p className='text-sm md:text-base font-fustat text-white/85'>Our Taxi Booking Service is designed to make your travel experience fast, safe, and convenient — whether you're heading to work, the airport, or just exploring the city. With just a few taps on your phone or clicks online,</p>

                        <div className='flex flex-row gap-x-3 items-center'>
                            <Link href={"#"} className=''>
                                <Image src={googlePlay} alt='google play' className='h-10 md:h-14 w-auto rounded-lg md:rounded-xl' />
                            </Link>
                            <Link href={"#"}>
                                <Image src={appleStore} alt='apple store' className='h-10 md:h-14 w-auto rounded-lg md:rounded-xl' />
                            </Link>
                        </div>

                    </div>

                    <div>
                        <Image src={mockup} alt='mockup img' placeholder='blur' className='h-full w-auto mx-auto' />
                    </div>



                </div>

            </div>
        </div>
    )
}

export default Sec5