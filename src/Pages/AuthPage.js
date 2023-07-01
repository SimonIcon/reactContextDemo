import React, { useState } from 'react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true)
    return (
        <div className="flex items-center justify-center h-screen">
            <div className='h-[70vh] w-[80vw] bg-slate-800 text-white  sm:w-2/3 md:w-1/2 lg:w-1/3 flex flex-col'>
                {
                    isLogin ? (<Login setIsLogin={setIsLogin} />) : (
                        <SignUp setIsLogin={setIsLogin} />
                    )
                }
            </div>
        </div>

    )
}

export default AuthPage
