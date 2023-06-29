import React, { useContext } from 'react'
import { AuthenticationContext } from '../contexts/AuthenticationContext';

const Navbar = () => {
    const { userName, showDashboard } = useContext(AuthenticationContext)
    const handleBack = () => {
        setTimeout(() => {
            showDashboard(false)
        }, 1000);
    }
    return (
        <div className='bg-slate-900 w-full h-[20%] flex flex-row justify-evenly py-3 px-3 items-center'>
            <h4 className='text-white text-2xl capitalize font-semibold font-serif'>welcome
                <span className='uppercase'>  {userName}</span></h4>
            <button className=' bg-white text-center text-semibold capitalize
            rounded-sm hover:bg-cyan-400  px-3 ml-7s
            '
                onClick={handleBack}
            > back to login</button>
        </div>
    )
}

export default Navbar