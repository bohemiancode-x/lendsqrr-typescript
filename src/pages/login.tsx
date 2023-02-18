import React from 'react';
import logo from '../assets/images/Union.png';
import pablo from '../assets/images/pablo-sign-in.png';

const login = () => {
  return (
    <div className='flex flex-col pt-24 sm:pt-0 sm:flex-row w-full h-screen font-avenir'>
        <div className='flex flex-col sm:py-[10em] px-[2em] sm:w-[50%] gap-10 sm:gap-24 bg-[#fff]'>
            <div className='flex gap-1 items-center ml-10'>
                <img className='h-[25px]' src={logo} alt="logo" />
                <span className='font-avenir font-bold text-[#213F7D] text-3xl'>lendsqr</span>
            </div>
            <div>
                <img className='w-[600px]' src={pablo} alt="pablo" />
            </div>
        </div>
        <div className='flex flex-col items-center sm:items-start gap-5 pt-5 sm:pt-0 sm:gap-16 sm:w-[50%] sm:my-[14em]'>
            <div className='flex flex-col items-center sm:items-start gap-3'>
                <h2 className='text-3xl text-[#213f7d] font-extrabold'>Welcome!</h2>
                <p className='text-lg text-[#545f7d] '>Enter details to login.</p>
            </div>

            <form className='flex flex-col w-[90%] sm:w-[80%] gap-5'>
                <input className='input' type="text" name="email" placeholder='Email' />
                <input className='input' type="password" name="password" placeholder="Password" />
                <span className='text-[#39cdcc] font-bold text-sm cursor-pointer'>FORGOT PASSWORD?</span>
                <input className='bg-[#39cdcc] hover:bg-[#fff] hover:border-[#39cdcc] hover:border-2 hover:text-[#39cdcc] text-white rounded font-bold text-sm py-3 cursor-pointer' type="button" value="LOG IN" />
            </form>
        </div>
    </div>
  )
}

export default login