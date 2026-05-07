import handPhone from "../../../../public/Handphone-Mockup-hero.png"
import Image from 'next/image'

function Sec1() {
    return (
        <div className='container mt-8'>
            <div className='bg-primary w-full relative rounded-4xl'>
                <div className='bg-[url(/hero_pattern.png)] bg-center opacity-5 absolute top-0 left-0 h-full w-full z-10'></div>

                <div className='relative flex flex-wrap items-center'>

                    <div className='p-10 lg:p-16 xl:p-24 pr-0 space-y-2 lg:space-y-5 w-full xl:w-[calc(52.102%)] relative z-20'>

                        <h1 className='font-extrabold text-3xl lg:text-5xl xl:text-6xl font-fustat text-white md:max-w-sm lg:max-w-2xl xl:w-full'>Book a <span className='italic underline underline-offset-2'>Ride</span> to Your Destination</h1>
                        <p className='md:text-sm lg:text-base xl:text-lg font-fustat text-gray-100 max-w-sm lg:max-w-xl'>Get where you need to go with a smooth and reliable ride experience. Choose your pickup and destination, book in seconds, and enjoy safe, comfortable transportation with professional drivers and real-time updates — whether it’s a daily commute, airport transfer, or long-distance trip.</p>

                        <button className="relative inline-flex items-center px-8 lg:px-10 xl:px-12 py-2 lg:py-3 overflow-hidden text-base md:text-lg text-white border-2 border-white rounded-full hover:text-primary group hover:bg-gray-50 cursor-pointer font-fustat font-semibold">
                            <span className="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative">Book A Ride</span>
                        </button>

                    </div>

                    <div className='relative w-full xl:w-[calc(47.854%)]'>
                        <div className='flex content-end items-end flex-wrap w-full relative'>
                            <div className='text-right w-full relative'>
                                <div className='-mt-[20px] md:-mt-[316px] lg:-mt-[380px] xl:mt-[40px] text-right'>
                                    <Image src={handPhone} alt='hand phone' className='h-auto w-[calc(87%)] md:w-[calc(46%)] xl:w-full rounded-b-4xl inline-block align-middle' />
                                </div>
                            </div>
                        </div>
                        {/* <div className='absolute -bottom-[274px] right-0 z-30'>
                            
                        </div> */}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Sec1