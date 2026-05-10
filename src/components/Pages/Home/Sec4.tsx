"use client"
import Image from "next/image";
import { FiUsers } from "react-icons/fi";
import { GoClock } from "react-icons/go";
import { LuCalendarDays, LuPackage } from "react-icons/lu";
import { MdCorporateFare, MdLocationCity } from "react-icons/md";
import { SlPlane } from "react-icons/sl";
import img1 from "../../../../public/sec4/img1.jpg"
import img2 from "../../../../public/sec4/img2.jpg"
import img3 from "../../../../public/sec4/img3.jpg"
import img4 from "../../../../public/sec4/img4.jpg"
import img5 from "../../../../public/sec4/img5.jpg"
import img6 from "../../../../public/sec4/img6.jpg"

import { motion } from "motion/react"

const services = [
    {
        title: "Airport Trans",
        description: "Reliable door-to-door airport transfers with flight tracking, meet & greet service, and no hidden fees.",
        image: img1,
        icon: <SlPlane />,
    },
    {
        title: "Hourly Rentals",
        description: "Book a private driver by the hour — perfect for meetings, errands, or exploring the city at your own pace.",
        image: img2,
        icon: <GoClock />,
    },
    {
        title: "Ride Sharing",
        description: "Share your ride with fellow passengers heading the same way and enjoy a comfortable, budget-friendly trip.",
        image: img3,
        icon: <FiUsers />,
    },
    {
        title: "City Tours",
        description: " Discover the city's hidden gems and iconic landmarks with our knowledgeable local drivers as your personal guide.",
        image: img4,
        icon: <MdLocationCity />,
    },
    {
        title: "Scheduled Ride",
        description: "Plan ahead and book your ride in advance — we'll be there exactly when you need us, every time.",
        image: img5,
        icon: <LuCalendarDays />,
    },
    {
        title: "Corporate",
        description: "Premium fleet and professional drivers tailored for business travel, executive transfers, and team transport.",
        image: img6,
        icon: <MdCorporateFare />,
    },
];

function Sec4() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 font-fustat">
            <div className="container">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.28,
                            delay: 0.1
                        }
                    }}
                    viewport={{ once: true }}
                    className="text-center max-w-xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b2545]">
                        Book a Ride and Enjoy the Journey
                    </h2>
                    <p className="mt-4 text-sm sm:text-base text-slate-500">
                        Explore reliable travel options for every journey—from airport transfers and rentals to ride sharing, scheduled trips, and corporate rides—designed for your comfort and convenience.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map(({ title, description, image, icon: Icon }, indx) => (
                        <motion.article
                            initial={{ opacity: 0 }}
                            whileInView={{
                                opacity: 1,
                                transition: {
                                    duration: 0.28,
                                    delay: 0.1 * (indx + 1)
                                }
                            }}
                            viewport={{ once: true }}
                            key={title} className="relative group">
                            <div className="relative rounded-3xl overflow-hidden">
                                <Image
                                    src={image}
                                    alt={title}
                                    placeholder="blur"
                                    loading="lazy"
                                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="relative -mt-20 mx-8 rounded-3xl bg-gradient-to-b from-[#5596ff] to-primary backdrop-blur-sm p-5 pt-6 text-center text-white shadow-lg">
                                <h3 className="text-xl font-bold mb-2">{title}</h3>
                                <p className="text-sm text-white/85 mb-4 leading-5">{description}</p>
                            </div>

                            <div className="absolute top-4 right-6 w-14 h-14 rounded-full bg-[#f5a623] flex items-center justify-center shadow-md ring-4 ring-[#eaf1fa] text-xl">
                                {Icon}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}


export default Sec4