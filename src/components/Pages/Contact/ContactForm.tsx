"use client"
import { HandleSendMessage } from '@/lib/Actions/SendMessage';
import React, { useState } from 'react'
import { ImSpinner2 } from "react-icons/im";

function ContactForm() {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const target = e?.currentTarget as any;
            const name = target?.name?.value;
            const email = target?.email?.value;
            const phone = target?.phone?.value;
            const message = target?.message?.value;
            setIsLoading(true)

            const res = await HandleSendMessage({ name, email, phone, message });

            if (res?.success) {
                setSuccess(true)
                setError(null)

                target.reset();
            } else {
                setError(res?.message)
                setSuccess(false)
            }
        } catch (err: any) {
            setError(err?.data?.message)
            setSuccess(false)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="rounded-xl border border-strokeinput p-10 space-y-5">

            {/* ------------------for success---------------- */}
            {success && <div className='bg-green-500/20 rounded text-white font-poppins px-4 py-2 text-xs border border-green-800'>
                <p className=''>Message Sent successfully</p>
            </div>}

            {/* ------------------for error---------------- */}
            {error && <div className='bg-red-500/20 rounded text-white font-poppins px-4 py-2 text-xs border border-red-800'>
                <p className=''>{error}</p>
            </div>}

            <div className="relative">

                <label htmlFor="name" className="font-fustat text-base font-medium text-primary">Name *</label>

                <input name="name" id="name" type="text" required className="block px-3 py-2 w-full text-base text-zinc-900 bg-white/90 rounded-[6px] focus:outline-none peer font-fustat  border border-strokeinput" placeholder="Enter your fullname" />
            </div>

            <div className='grid grid-cols-2 gap-3 items-center'>
                <div className="relative">

                    <label htmlFor="email" className="font-fustat text-base font-medium text-primary">Email *</label>

                    <input name="email" type="email" id="email" required className="block px-3 py-2 w-full text-base text-zinc-900 bg-white/90 rounded-[6px] focus:outline-none peer font-fustat border border-strokeinput" placeholder="Enter your email" />
                </div>
                <div className="relative">

                    <label htmlFor="phone" className="font-fustat text-base font-medium text-primary">Phone *</label>

                    <input name='phone' type="number" required id="phone" className="block px-3 py-2 w-full text-base text-zinc-900 bg-white/90 rounded-[6px] focus:outline-none peer font-fustat border border-strokeinput" placeholder="Enter your phone" />
                </div>
            </div>

            <div className="relative">

                <label htmlFor="subject" className="font-fustat text-base font-medium text-primary">Subject *</label>

                <input name="subject" id="subject" type="text" required className="block px-3 py-2 w-full text-base text-zinc-900 bg-white/90 rounded-[6px] focus:outline-none peer font-fustat  border border-strokeinput" placeholder="Write your subject" />
            </div>


            <div className="relative">

                <label htmlFor="message" className="font-fustat text-base font-medium text-primary">Message *</label>

                <textarea name="message" rows={5} required id="message" className="block px-3 py-2 w-full text-base text-zinc-900 rounded-[6px] focus:outline-none peer font-fustat border border-strokeinput" placeholder=" " />
            </div>

            <button disabled={isLoading} type='submit' className='bg-primary text-white p-2.5 uppercase text-base font-poppins font-medium rounded-xl w-full flex flex-row gap-x-2 items-center justify-center disabled:cursor-not-allowed disabled:bg-primary/70 hover:bg-primary/80 duration-200'>
                {isLoading && <ImSpinner2 className='size-4 text-white animate-spin' />}
                <p>Submit Now</p>
            </button>

        </form>
    )
}

export default ContactForm