import React from 'react';
import logo from '../assets/images/Union.png';
import userimg from '../assets/images/userimg.png';
import { RiArrowDownSFill, RiSearchLine } from 'react-icons/ri';
import { AiOutlineBell } from 'react-icons/ai'

const navbar = () => {
  return (
    <div className='flex justify-evenly py-4 shadow bg-[#fff]'>
        <div className='flex gap-1 items-center mx-5 lg:mx-10'>
                <img className='h-[25px]' src={logo} alt="logo" />
                <span className='font-avenir font-bold text-[#213F7D] text-xl lg:text-3xl'>lendsqr</span>
        </div>

        <form className='hidden lg:flex mx-10 border-2 pl-2 rounded-lg w-[25em]'>
            <input className='outline-none w-full' type="text" name="search" placeholder='Search for anything' />
            <button className='bg-[#39cdcc] ml-auto text-white px-4 rounded-r-lg'>
                <RiSearchLine />
            </button>
        </form>

        <div className='flex ml-auto px-5 lg:px-10 items-center gap-7 text-[#213f7d]'>
            <p className='underline underline-offset-1'>Docs</p>
            <button>
                <AiOutlineBell className='text-xl'/>
            </button>
            <div className="user flex gap-3 items-center">
                <img className='rounded-full w-8 lg:w-12' src={userimg} alt="userimage" />
                <p>Adedeji</p>
                <RiArrowDownSFill />
            </div>
        </div>

    </div>
  )
}

export default navbar