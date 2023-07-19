import React from 'react'
import Image from 'next/image'
import logo from "@/app/eco-logo.png"
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex justify-between p-5 sticky top-0 bg-green-400 z-50 shadow-md'>
        <div className='flex space-x-2 items-center'>
            <Image src={logo}
            alt="logo"
            height={40}
            width={40}/>
            <div>
                <h1 className='font-bold'>Haram's <span className=' text-blue-700 font-extrabold'>AI Art</span> Generator</h1>
                <h2 className='text-xs text-gray-600 '>Powered by DALL-E, Chat GPT, & Microsoft Azure</h2>
            </div>
        </div >
           
        <div className='flex space-x-5  items-center text-base md:text-2xl  text-gray-600'>
            <Link href='https://github.com/haram082'><FaGithub /></Link>
            <Link href="https://www.linkedin.com/in/haram-yoon-b359511b0/"><FaLinkedin /></Link>
            <FaEnvelope />
        </div>

    </header>
  )
}

export default Header
