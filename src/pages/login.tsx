import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/Union.png';
import pablo from '../assets/images/pablo-sign-in.png';
import { ThreeDots } from 'react-loader-spinner';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isPending, setIsPending] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if(email !== '' && password !== '') {
            setIsPending(true);
            setTimeout(() => {
                navigate('/users');
            }, 2000)
            //setIsPending(false)
        } else {
            setError(true);
            setTimeout(()=> {
                setError(false);
            },2000)
        }; 
    }


  return (
    <div className='flex flex-col lg:flex-row pt-24 w-full h-screen font-avenir'>
        <div className='flex flex-col lg:py-[10em] px-[2em] lg:w-[50%] gap-10 sm:gap-24 bg-[#fff]'>
            <div className='flex gap-1 items-center ml-10'>
                <img className='h-[25px]' src={logo} alt="logo" />
                <span className='font-avenir font-bold text-[#213F7D] text-3xl'>lendsqr</span>
            </div>
            <div>
                <img className='w-[600px]' src={pablo} alt="pablo" />
            </div>
        </div>
        <div className='flex flex-col items-center lg:items-start gap-5 pt-5 lg:pt-0 lg:gap-16 lg:w-[50%] lg:my-[14em]'>
            <div className='flex flex-col items-center sm:items-start gap-3'>
                <h2 className='text-3xl text-[#213f7d] font-extrabold'>Welcome!</h2>
                <p className='text-lg text-[#545f7d] '>Enter details to login.</p>
            </div>

            <form onSubmit={handleLogin} className='flex flex-col w-[90%] sm:w-[80%] gap-5'>
                <input 
                    className='input' 
                    type="text" 
                    name="email" 
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} 
                    />
                <input 
                    className='input' 
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} 
                    />
                <span className='text-[#39cdcc] font-bold text-sm cursor-pointer'>FORGOT PASSWORD?</span>
                {isPending ? 
                    <ThreeDots
                        height="80" 
                        width="80" 
                        radius="9"
                        color="#39cdcc" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{margin: 'Auto'}}
                        visible={true}
                    /> :
                    <input className='bg-[#39cdcc] hover:bg-[#fff] hover:border-[#39cdcc] hover:border-2 hover:text-[#39cdcc] text-white rounded font-bold text-sm py-3 cursor-pointer' type="button" value="LOG IN" onClick={handleLogin} />
                }
                {
                    error && <span className='text-red-400 m-auto'>Enter your email and password.</span>
                }
            </form>
        </div>
    </div>
  )
}

export default Login