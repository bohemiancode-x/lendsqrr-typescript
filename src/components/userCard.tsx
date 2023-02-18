import React from 'react'

interface Props {
    text: string;
    icon: string;
    count: number
}

const userCard: React.FC<Props> = ({ text, icon, count}) => {
  return (
    <div className='bg-white text-[#213f7d] w-[20%] rounded px-3 py-3 shadow'>
        <img src={icon} alt={text} />
        <p className='text-xs my-[5px]'>{text}</p>
        <span className='font-bold'>{count.toLocaleString()}</span>
    </div>
  )
}

export default userCard