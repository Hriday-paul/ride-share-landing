import ContactForm from '@/components/Pages/Contact/ContactForm'
import Link from 'next/link'
import { IoCallOutline, IoMailOutline } from 'react-icons/io5'

function ContactPage() {
    return (
        <div className='container'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5 lg:mt-8 '>
                <div className='bg-primary/10 p-10 rounded-xl space-y-5'>
                    <h3 className='text-black text-4xl font-fustat font-extrabold max-w-lg'>Hi there! We're always here to <span className='text-primary'>Help You</span></h3>
                    <p className='text-base text-gray-700 font-fustat font-medium'>Warm and approachable message to build trust and show constant support.</p>
                    <div className='space-y-3'>
                        <div className='flex flex-row gap-x-2 items-center'>
                            <IoCallOutline className='size-7' />
                            <div>
                                <p className='text-xl font-fustat font-bold text-primary'>Call Us</p>
                                <Link href="tel:+1 (949) 514-7881" className='text-base font-fustat font-semibold text-gray-700'>+1 (949) 514-7881</Link>
                            </div>
                        </div>
                        <div className='flex flex-row gap-x-2 items-center'>
                            <IoMailOutline className='size-7' />
                            <div>
                                <p className='text-xl font-fustat font-bold text-primary'>Email</p>
                                <Link href="mailto:support@advantageride.com" className='text-base font-fustat font-semibold text-gray-700'>support@advantageride.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactPage