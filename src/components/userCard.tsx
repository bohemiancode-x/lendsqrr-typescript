import React from 'react'

interface Props {
    text: string;
    icon: string;
    count: number
}

const userCard: React.FC<Props> = ({ text, icon, count}) => {
  return (
    <div className='flex flex-row gap-5 lg:gap-1 lg:flex-col bg-white text-[#213f7d] lg:w-[20%] rounded px-3 py-3 shadow'>
        <img className='w-14' src={icon} alt={text} />
        <div>
            <p className='text-xs my-[5px]'>{text}</p>
            <span className='font-bold'>{count.toLocaleString()}</span>
        </div>
    </div>
  )
}

export default userCard