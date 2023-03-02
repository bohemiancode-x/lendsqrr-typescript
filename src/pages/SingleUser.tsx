import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout';
import { useParams } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';
import { HiOutlineArrowLongLeft } from 'react-icons/hi2'
import { MdStarOutline, MdStar } from 'react-icons/md'

const NavData = [
    {
        id: 1,
        text: 'General Details',
        active: true
    },
    {
        id: 2,
        text: 'Documents'
    },
    {
        id: 3,
        text: 'Bank Details'
    },
    {
        id: 4,
        text: 'Loans'
    },
    {
        id: 4,
        text: 'Savings'
    },
    {
        id: 5,
        text: 'App and System'
    }
]

const SingleUser:React.FC = () => {
    const [data, setData] = useState<any>([]);
    const [isPending, setIsPending] = useState<boolean>(true);
    const params = useParams();

    const url: string = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${params.id}`;

    const fetchData = async () => {
        setIsPending(true)
        const response = await fetch(url);
        const users = await response.json()
        setData(users)
        setIsPending(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    
  return (
    <Layout>
        <div className='px-4 pb-3 md:px-10 mt-8'>
        <div>
            <Link to='/users' className='flex items-center gap-2 text-[#545f7d]'>
                <HiOutlineArrowLongLeft />
                <span>Back to Users</span>
            </Link>
            <div className='flex justify-between'>
                <h1 className='text-[#213F7D] font-bold text-xl mt-2'>User Details</h1>
                {!isPending && 
                    <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
                        <button className='font-bold text-xs lg:text-sm p-2 tracking-widest text-[#e4033b] border-[1px] rounded-lg border-[#e4033b] hover:bg-[#e4033b] hover:text-white'>
                            BLACKLIST USER
                        </button>
                        <button className='font-bold text-xs lg:text-sm p-2 tracking-widest text-[#39cdcc] border-[1px] rounded-lg border-[#39cdcc] hover:bg-[#39cdcc] hover:text-white'>
                            ACTIVATE USER
                        </button>
                    </div>
                }
            </div>
        </div>
        {isPending && 
            <div className='flex justify-center items-center w-full h-[50vh]'>
                <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#39cdcc"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='ball-triangle-loading'
                    />
            </div>
        }
        {!isPending && 
            <div>
                <div className='shadow-xl rounded mt-5 bg-white px-5'>
                    <div className='flex flex-col md:flex-row py-5 gap-2 md:gap-4 items-center'>
                        <img className='rounded-full h-[70px] md:h-[100px]' src={data.profile.avatar} alt="" />
                        <div className='flex items-center justify-between w-full md:w-[inherit] gap-2 md:block'>
                            <h2 className='text-[#213f7d] text-lg'>{data.profile.firstName + " " + data.profile.lastName}</h2>
                            <span className='text-[#545f7d]'>{data.profile.bvn}</span>
                        </div>
                        <span className='border-[1px] border-[#545f7d] w-full md:w-[1px] md:h-[70px] opacity-20'></span>
                        <div className='flex items-center justify-between w-full md:w-[inherit] gap-2 md:block'>
                            <p className='text-[#213f7d] text-sm'>User's Tier</p>
                            <div className='text-[#e9b200] flex'>
                                <MdStar />
                                <MdStarOutline />
                                <MdStarOutline />
                            </div>
                        </div>
                        <span className='border-[1px] border-[#545f7d] w-full md:w-[1px] md:h-[70px] flex opacity-20'></span>
                        <div className='text-[#213f7d] flex items-center justify-between w-full md:w-[inherit] gap-2 md:block'>
                            <h2 className='font-bold text-lg'>N{data.accountBalance.toLocaleString()}</h2>
                            <span className='text-xs'>{data.accountNumber + "/" + data.orgName}</span>
                        </div>
                    </div>
                    <div className='flex justify-evenly text-xs md:text-base mt-2'>
                        {NavData.map((nav) => (
                            <span className={nav.active ? 'text-[#39cdcc] py-2 px-4 border-b-[2px] border-[#39cdcc]' : 'hidden md:block py-2 text-[#545f7d] cursor-pointer'} key={nav.id}>
                                {nav.text}
                            </span>
                        ))}
                    </div>
                </div>

                <div className='shadow-xl rounded mt-5 text-[#545f7d] bg-white px-5 py-5'>
                    <div className=''>
                        <h2 className='py-3 font-bold'>Personal Information</h2>
                        <div className='grid grid-cols-2 md:grid-cols-5 grid-flow-row gap-5'>
                            <div>
                                <p className='info_heading'>FULL NAME</p>
                                <p className='info_data'>{data.profile.firstName + " " + data.profile.lastName}</p>
                            </div>
                            <div>
                                <p className='info_heading'>PHONE NUMBER</p>
                                <p className='info_data'>{data.profile.phoneNumber}</p>
                            </div>
                            <div className='col-span-2'>
                                <p className='info_heading'>EMAIL ADDRESS</p>
                                <p className='info_data'>{data.email}</p>
                            </div>
                            <div>
                                <p className='info_heading'>BVN</p>
                                <p className='info_data'>{data.profile.bvn}</p>
                            </div>
                            <div>
                                <p className='info_heading'>GENDER</p>
                                <p className='info_data'>{data.profile.gender}</p>
                            </div>
                            <div>
                                <p className='info_heading'>MARITAL STATUS</p>
                                <p className='info_data'>{data.profile?.maritalStatus? data.profile.maritalStatus : 'NA'}</p>
                            </div>
                            <div>
                                <p className='info_heading'>CHILDREN</p>
                                <p className='info_data'>{data.profile?.children? data.profile.children : 'NA'}</p>
                            </div>
                            <div>
                                <p className='info_heading'>TYPE OF RESIDENCE</p>
                                <p className='info_data'>NA</p>
                            </div>
                        </div>
                    </div>
                    <span className='border-[0.5px] my-5 border-[#545f7d] flex opacity-20'></span>
                    <div className=''>
                        <h2 className='py-3 font-bold'>Education and Employment</h2>
                        <div className='grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-5'>
                            <div>
                                <p className='info_heading'>LEVEL OF EDUCATION</p>
                                <p className='info_data'>{data.education.level}</p>
                            </div>
                            <div>
                                <p className='info_heading'>EMPLOYMENT STATUS</p>
                                <p className='info_data'>{data.education.employmentStatus}</p>
                            </div>
                            <div>
                                <p className='info_heading'>SECTOR OF EMPLOYMENT</p>
                                <p className='info_data'>{data.education.sector}</p>
                            </div>
                            <div>
                                <p className='info_heading'>DURATION OF EMPLOYMENT</p>
                                <p className='info_data'>{data.education.duration}</p>
                            </div>
                            <div>
                                <p className='info_heading'>OFFICE EMAIL</p>
                                <p className='info_data'>{data.education.officeEmail}</p>
                            </div>
                            <div>
                                <p className='info_heading'>MONTHLY INCOME</p>
                                <p className='info_data'>{`N${data.education.monthlyIncome[1]} - N${data.education.monthlyIncome[0]}`}</p>
                            </div>
                            <div>
                                <p className='info_heading'>LOAN REPAYMENT</p>
                                <p className='info_data'>N{data.education.loanRepayment}</p>
                            </div>
        
                        </div>
                    </div>
                    <span className='border-[0.5px] my-5 border-[#545f7d] flex opacity-20'></span>
                    <div className=''>
                        <h2 className='py-3 font-bold'>Socials</h2>
                        <div className='grid grid-cols-4 gap-5'>
                            <div>
                                <p className='info_heading'>TWITTER</p>
                                <p className='info_data'>{data.socials.twitter}</p>
                            </div>
                            <div>
                                <p className='info_heading'>FACEBOOK</p>
                                <p className='info_data'>{data.socials.facebook}</p>
                            </div>
                            <div>
                                <p className='info_heading'>INSTAGRAM</p>
                                <p className='info_data'>{data.socials.instagram}</p>
                            </div>
                        </div>
                    </div>
                    <span className='border-[0.5px] my-5 border-[#545f7d] flex opacity-20'></span>
                    <div className=''>
                        <h2 className='py-3 font-bold'>Guarantor</h2>
                        <div className='grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-5'>
                            <div>
                                <p className='info_heading'>FULL NAME</p>
                                <p className='info_data'>{data.guarantor.firstName + " " + data.guarantor.lastName}</p>
                            </div>
                            <div>
                                <p className='info_heading'>PHONE NUMBER</p>
                                <p className='info_data'>{data.guarantor?.phoneNumber}</p>
                            </div>
                            <div>
                                <p className='info_heading'>GENDER</p>
                                <p className='info_data'>{data.guarantor.gender}</p>
                            </div>
                            <div>
                                <p className='info_heading'>ADDRESS</p>
                                <p className='info_data'>{data.guarantor.address}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        </div>
    </Layout>
  )
}

export default SingleUser