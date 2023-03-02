import Navbar from './navbar';
import Dashboard from './dashboard';

interface Props {
    children: React.ReactNode
}

const layout = ( props: Props ) => {
  return (
    <div className='relative h-screen'>
        <div className='sticky top-0 z-[100]'>
            <Navbar />
        </div>
        <div className='flex w-screen'>
            <div className='hidden md:flex flex-col w-[20%] max-h-full shadow'>
                <Dashboard />
            </div>
            <div className='bg-[#e5e5e5]/50 w-full'>
                {props.children}
            </div>
        </div>
    </div>
  )
}

export default layout