import Image from 'next/image'
import Link from 'next/link'
import logo from "../../../public/logo.png"

const routs = [
    {
        id: 1,
        label: "Home",
        rout: "/"
    },
    {
        id: 2,
        label: "About",
        rout: "/about"
    },
    {
        id: 3,
        label: "Privacy",
        rout: "/privacy"
    },
    {
        id: 4,
        label: "Terms",
        rout: "/terms"
    }
]

function Navbar() {
    return (
        <div className='container'>
            <div className='flex flex-row gap-5 items-center justify-between px-2 py-4'>
                <Link href={'/'}>
                    <Image src={logo} loading='eager' alt='logo' className='h-12 md:h-14 lg:h-16 w-auto object-contain' />
                </Link>
                <ul className='md:flex flex-row gap-x-4 md:gap-x-6 lg:gap-x-8 xl:gap-x-14 items-center font-semibold font-fustat text-sm md:text-base lg:text-lg text-black hidden'>
                    {routs?.map(rout => {
                        return <li key={rout?.id}>
                            <Link href={rout?.rout}>{rout?.label}</Link>
                        </li>
                    })}
                </ul>
                <button className="group relative inline-flex py-3 text-sm md:text-base items-center justify-center rounded-full bg-primary px-7 md:px-11 font-semibold text-white transition hover:scale-105 cursor-pointer font-fustat overflow-hidden">
                    <span>Contact Us</span>
                    <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                        <div className="relative h-full w-8 bg-white/20"></div>
                    </div>
                </button>

            </div>
        </div>
    )
}

export default Navbar