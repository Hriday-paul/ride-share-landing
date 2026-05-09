import React from 'react'
import img1 from "../../../../public/sec3/about-thumb1-1.jpg"
import img2 from "../../../../public/sec3/about-thumb1-2.jpg"
import Image from 'next/image'

function Sec3() {
    return (
        <div className='bg-[url(/sec3/pattern.png)]/10 bg-center py-20'>
            <div className='container'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-7'>
                        <div className='inline-flex gap-6 relative'>
                            {/* -----img 1--------- */}
                            <div className='rounded-2xl overflow-hidden'>
                                <Image src={img1} className='w-full h-auto object-cover' alt='about img'/>
                            </div>
                            <div className='rounded-2xl self-end overflow-hidden'>
                                <Image src={img2} className='w-full h-auto object-cover' alt='about img'/>
                            </div>
                            <div className='w-40 h-40 top-[10px] absolute right-0 inline-flex rounded-full items-center justify-center'>
                                <span className='w-40 h-40 -ml-20 -mt-20 text-xl inline-block rounded-full absolute text-center top-1/2 left-1/2'>
                                    {"Years of experiences ** Years of experiences ** Years of experiences ** Years of experiences".split("").map(char=>{
                                        return <span className='rotate-[5deg] h-[86px] w-5 absolute -top-[5px] left-[calc(44.5%)] text-black' key={char}>{char}</span>
                                    })}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-5'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sec3