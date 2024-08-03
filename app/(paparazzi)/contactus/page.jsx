import { RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react";
import React from "react";


const ContactUs = () =>{
    return(
        <>
            <section >
                <div className="max-w-screen-2xl mx-auto py-24">
                    <h1 className="text-3xl font-semibold">Contact Us</h1>
                    <p className="mt-4 italic">Ready to Unleash Your Power? Get in Touch with Paparazzi House Today!</p>
                    <p className="mt-4 text-2xl">Whether you're seeking guidance, information, or simply want to explore how Paparazzi House can help you achieve your goals, we're here to assist you every step of the way. Contact us to book your free consultation, schedule a 1-1 paid advisory session, or secure your membership to our exclusive social club.</p>

                    <h2 className="text-2xl font-semibold mt-6">Don't wait for success to find you – seize it with Paparazzi House.</h2>
                </div>


                <div className="bg-white text-black w-full">
                    <p className="max-w-screen-2xl mx-auto text-2xl p-4 font-semibold">Call Us | Book a Free Consultation | Book 1-on-1 Paid Advisory Session</p>
                </div>

                <div className="max-w-screen-2xl mx-auto py-18">
                    <p className="text-3xl font-semibold mt-8">Location and Contact Details:</p>

                    <div className=" grid grid-cols-1 justify-items-center mt-16">
                         <div className="flex flex-col gap-6">
                            <p className="flex items-center gap-4 justify-start "><RiMapPinLine className="bg-[#D2940A] p-2 text-black size-10 rounded-full"/> Our Headquarters: Paparazzi House, Emirates Tower, Level - 41, Dubai.</p>
                            <p className="flex items-center gap-4 justify-start "><RiPhoneLine className="bg-[#D2940A] p-2 text-black size-10 rounded-full"/> Phone: +971508500750</p>
                            <p className="flex items-center gap-4 justify-start "><RiMailLine className="bg-[#D2940A] p-2 text-black size-10 rounded-full"/> Email: director@paparazzi.house</p>
                         </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default ContactUs