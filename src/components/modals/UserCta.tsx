import React from 'react'
import deleteuser from '../../assets/images/svgs/deleteuser.svg';
import activateuser from '../../assets/images/svgs/activateuser.svg';
import eyeuser from '../../assets/images/svgs/eyeuser.svg';

const UserCta: React.FC = () => {
  return (
    <div className='flex flex-col gap-2 py-3'>
        <button className='userCta-btn'>
            <img src={eyeuser} alt="eye" />
            <span>View Details</span>
        </button>
        <button className='userCta-btn'>
            <img src={deleteuser} alt="delete" />
            <span>Blacklist User</span>
        </button>
        <button className='userCta-btn'>
            <img src={activateuser} alt="activate" />
            <span>Activate User</span>
        </button>
    </div>
  )
}

export default UserCta