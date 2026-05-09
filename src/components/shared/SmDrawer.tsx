"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../public/logo.png"
import { routs } from "./Navbar";
import { motion } from "motion/react"
import { FaArrowLeftLong } from "react-icons/fa6";

function SmDrawer() {
    const [open, setOpen] = useState(false);

    return (
        <div className="">

            {/* Backdrop */}
            {open && (
                <div
                    className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
                    onClick={() => setOpen(false)}
                ></div>
            )}

            {/* Drawer */}
            <aside
                className={`fixed top-0 left-0 z-40 h-full w-80 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
            >

                {/* Header */}
                <button
                    onClick={() => setOpen(false)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors absolute top-5 right-5 cursor-pointer border border-strokeinput"
                    aria-label="Close sidebar"
                >
                    ✕
                </button>

                <div className='px-5'>

                    <Link href='/' className='flex flex-row gap-x-1 items-center'>
                        <Image src={logo} alt='logo' height={1000} width={1000} className='w-24 md:w-28 lg:w-32 h-auto' />
                    </Link>

                    <ul className="my-3">
                        {
                            routs?.map(item => {
                                return <motion.li
                                    initial={{ opacity: 0, x: 15, y: 20 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    transition={{ duration: 0.2, delay: 0.1 * item?.id }}

                                    key={item?.id} className='text-base relative group my-2'>
                                    <Link href={item?.rout} onClick={()=>setOpen(false)} className="border-b border-b-zinc-700 py-4 font-fustat text-sm text-black flex flex-row gap-x-1 items-center group duration-300 cursor-pointer">
                                        <div className="w-full flex flex-row gap-x-1 items-center">
                                            <h6 className="text-secondary text-xl font-fustat">{item?.label}</h6>
                                            <FaArrowLeftLong className="text-secondary block rotate-180 ml-1 group-hover:ml-2.5 duration-200" />
                                        </div>
                                    </Link>

                                </motion.li>
                            })
                        }
                    </ul>



                </div>

            </aside>

            <button
                onClick={() => setOpen(true)}
                className="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-zinc-100 transition-colors cursor-pointer"
                aria-label="Open sidebar"
            >
                <span className="block w-5 h-0.5 bg-zinc-700 rounded" />
                <span className="block w-5 h-0.5 bg-zinc-700 rounded" />
                <span className="block w-3 h-0.5 bg-zinc-700 rounded" />
            </button>


        </div>
    );
}

export default SmDrawer