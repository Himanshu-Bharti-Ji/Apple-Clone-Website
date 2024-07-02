import React from 'react'
import { footerLinks } from "../constants"

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className='py-5 sm:px-10 px-5'>
            <div className='screen-max-width'>
                <div className="flex md:flex-row flex-col md:items-center justify-between">
                    <div>
                        <p className="font-semibold text-gray text-xs">
                            This is a clone of the Apple website made for educational and portfolio purposes.
                        </p>

                        <p className="font-semibold text-gray text-xs">
                            All product images and names are owned by Apple Inc.
                        </p>
                    </div>
                    <div className='text-end'>
                        <p className="font-semibold text-gray text-xs">
                            Developed by <span className='text-white'>Himanshu Bharti</span>.
                        </p>
                        <p className="font-semibold text-gray text-xs">
                            Visit my <span className='text-blue underline'><a href="https://himanshubharti.netlify.app/" target='_blank'>portfolio</a></span> for more projects.
                        </p>
                    </div>
                </div>

                <div className='bg-neutral-700 my-5 h-[1px] w-full' />

                <div className="flex md:flex-row flex-col md:items-center justify-between">
                    <p className="font-semibold text-gray text-xs">
                        Copyright © {currentYear} Apple Inc. All rights reserved.
                    </p>

                    <div className="flex">
                        {footerLinks.map((link, i) => (
                            <p key={link} className='font-semibold text-gray text-xs cursor-pointer'>
                                {link} {" "}
                                {i !== footerLinks.length - 1 && (
                                    <span className='mx-2'> | </span>
                                )}
                            </p>
                        ))}
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer
