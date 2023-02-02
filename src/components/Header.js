import React from 'react'

import { AiOutlineSearch, AiFillHome, AiOutlineSend, AiOutlinePlusCircle, AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";



export default function Header() {
    return (
        <div className=' bg-white'>
            <div className='max-w-7xl mx-auto py-2 flex items-center justify-between px-5'>

                {/* Logo*/}
                <img className='w-36 hidden sm:block' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png" alt="profile pic" />
                <img className='w-7 sm:hidden' src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="profile pic" />

                {/* search bar*/}
                <div className="relative flex items-center ">
                    <div className='absolute pl-3'><AiOutlineSearch className='text-gray-400 text-lg' /></div>
                    <input className='border-md border h-11 pl-9 rounded-md sm:w-80 w-13 bg-slate-50' type="text" placeholder='Search' />
                </div>

                {/* Menu*/}
                <div className='flex items-center space-x-5'>
                    <div className='hidden sm:flex space-x-5'>
                        <AiFillHome className='text-2xl hover:scale-125 hover:cursor-pointer transition-all ' />
                        <AiOutlineSend className='text-2xl hover:scale-125 hover:cursor-pointer transition-all -rotate-45 ' />
                        <AiOutlinePlusCircle className='text-2xl hover:scale-125 hover:cursor-pointer transition-all ' />
                        <AiOutlineHeart className='text-2xl hover:scale-125 hover:cursor-pointer transition-all ' />
                    </div>
                    <AiOutlineMenu className='text-2xl hover:scale-125 hover:cursor-pointer transition-all sm:hidden' />
                </div>

            </div>

        </div>
    )
}
