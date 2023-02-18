import React from 'react';
import { dashboardData } from '../data/dashboardData';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const dashboard = () => {
  return (
    <div className='py-5 text-sm text-[#213f7d] bg-[#fff]'>
        <div className='flex items-center gap-0 px-3 justify-evenly text-[#213f7d]'>
            <img src="/briefcase.svg" alt="briefcase" />
            <h3 className='text-xs text-start'>Switch Organization</h3>
            <MdOutlineKeyboardArrowDown />
        </div>
        <div className='flex gap-2 px-5 opacity-50 mt-7'>
            <img src="/home.svg" alt="home" />
            <p>Dashboard</p>
        </div>
        <div className='mt-4 flex flex-col gap-1'>
            <span className='text-[9px] px-5 font-bold'>CUSTOMERS</span>
            {
                dashboardData.customers.map((d) => (
                    <div className={d.active ? 'dashboard-item opacity-100 bg-greenish/10 border-l-2 border-greenish' : 'dashboard-item hover:bg-greenish/10'}>
                        <img src={d.img} alt={d.text} />
                        <p>{d.text}</p>
                    </div>
                ))
            }
           
        </div>

        <div className='mt-4 flex flex-col gap-1'>
            <span className='text-[10px] uppercase px-5 font-bold'>Businesses</span>
            {
                dashboardData.businesses.map((d) => (
                    <div className='dashboard-item hover:bg-greenish/10'>
                        <img src={d.img} alt={d.text} />
                        <p>{d.text}</p>
                    </div>
                ))
            }
        </div>

        <div className='mt-4 flex flex-col gap-1'>
            <span className='text-[10px] uppercase px-5 font-bold'>settings</span>
            {
                dashboardData.settings.map((d) => (
                    <div className='dashboard-item hover:bg-greenish/10'>
                        <img src={d.img} alt={d.text} />
                        <p>{d.text}</p>
                    </div>
                ))
            }
        </div>

        <div className='mt-4'>
            <span className='border-[1px] border-[#213f7d] opacity-10 flex'></span>
            <div className='dashboard-item hover:bg-greenish/10 opacity-100'>
                <img src="/sign-out.svg" alt="" />
                <p>Logout</p>
            </div>
            <span className='text-xs px-5'>v1.2.0</span>
        </div>
    </div>
  )
}

export default dashboard