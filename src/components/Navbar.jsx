import React from 'react'
import {AiOutlineMenu} from "react-icons/ai";

export default function Navbar() {
    return (
        <div className='bg-white '>
        <div className='flex items-center justify-between gap-8 text-customGray container px-6 lg:px-12 h-24'>
            <a href='/#'>
                <img src={require("../images/logo.svg").default} alt="logo" />
            </a>
            <ul className='hidden md:flex items-center flex-1 md:gap-6 lg:gap-12'>
                <li className='hover:text-vDarkVio'>
                    <a href='/#'>Features</a>
                </li>
                <li className='hover:text-vDarkVio'>
                    <a href='/#'>Pricing</a>
                </li>
                <li className='hover:text-vDarkVio'>
                    <a href='/#'>Resources</a>
                </li>
            </ul>
            <div className='hidden md:flex items-center gap-8'>
                <a href="/#" className='hover:text-vDarkVio'>Login</a>
                <a className='bg-cyan px-6 py-2 rounded-full text-white hover:opacity-70' href="/#">Sign Up</a>
            </div>
            <AiOutlineMenu className="md:hidden scale-150 cursor-pointer" />
        </div>
        </div>
    )
}
