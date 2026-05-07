import luxuryCar from "../../../../public/sec2/luxary.png"
import mercedesCar from "../../../../public/sec2/marcedes.png"
import teslaCar from "../../../../public/sec2/tesla.png"
import Image from 'next/image'

const cars = [
    {
        id: 1,
        title: "Luxury SUV",
        img: luxuryCar,
        bgcolor : "#fff",
        txtcolor : "#17191F",
        desc: "A spacious and premium ride designed for maximum comfort, smooth journeys, and extra room for passengers and luggage."
    },
    {
        id: 2,
        title: "Mercedes Sedan",
        img: mercedesCar,
        bgcolor : "#3A86FF",
        txtcolor : "#ffff",
        desc: "A car offering a luxurious interior, quiet ride, and smooth performance perfect for comfortable long-distance travel."
    },
    {
        id: 3,
        title: "Tesla",
        bgcolor : "#0461f7",
        txtcolor : "#ffff",
        img: teslaCar,
        desc: "A modern electric ride built for efficiency and performance, offering a smooth, tech-driven, and eco-friendly driving experience."
    },
]

function Sec2() {
    return (
        <div className='container'>
            <div className='max-w-lg md:max-w-xl lg:max-w-2xl mx-auto mt-20 space-y-2'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold font-fustat text-center'>Ride in Comfort</h2>
                <p className='text-sm lg:text-base text-gray-600 text-center font-fustat'>Explore our range of vehicles, from everyday rides to spacious and luxury options. Each car is well-maintained, comfortable, and designed to give you a smooth and reliable travel experience.</p>
            </div>
            <div className='flex flex-wrap gap-y-16 lg:gap-y-20 m-auto relative mt-6 md:mt-7 lg:mt-8'>
                {
                    cars.map(car => {
                        return <div key={car?.id} className='w-full md:w-1/2 lg:w-1/3 flex relative z-0'>
                            <div style={{backgroundColor : car?.bgcolor, color : car?.txtcolor}} className='shadow-[0px_11px_35px_-12px_rgba(0,0,0,0.6)] mr-0 md:mr-[50px] pt-10 pr-[30px] pl-[30px] rounded-[30px] flex flex-wrap relative content-start w-full space-y-3'>
                                <div className='bg-[url(/hero_pattern.png)] bg-center opacity-10 absolute inset-0 z-10'></div>
                                <h6 className='text-xl md:text-2xl font-extrabold font-fustat'>{car?.title}</h6>
                                <p style={{color : car?.txtcolor}} className='text-sm md:text-base font-fustat'>{car?.desc}</p>
                                <div className='w-full'>
                                    <div className='-mr-8 md:-mr-12 xl:-mr-[69px] -mb-12 md:-mb-12 lg:-mb-12 xl:-mb-20 ml-15'>
                                        <Image src={car?.img} className='inline-block align-middle relative z-20 h-full w-auto' alt='car img'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Sec2