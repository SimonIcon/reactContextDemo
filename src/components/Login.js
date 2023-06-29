import React, { useContext, useState } from 'react'
import { AuthenticationContext } from '../contexts/AuthenticationContext'
const Login = () => {
    // getting AuthenticationContext state variables
    const { userName, setUserName, showDashboard } = useContext(AuthenticationContext)
    const [userNameError, setUserNameError] = useState('')
    const [passwordError, setPasswordError] = useState("")
    const [loginSucces, setLoginSuccess] = useState('')
    const [password, setPassword] = useState('')
    // handling login
    // let assume username === symohdev and password === 12345678 and below is the logic
    const HandleLogin = () => {
        if (userName !== "symohdev") {
            setUserNameError("wrong username")
            setTimeout(() => {
                setUserNameError("")
                setUserName("")
            }, 2000)
        } else if (password !== "12345678") {
            setPasswordError("wrong password")
            setTimeout(() => {
                setPasswordError("")
                setPassword("")
            }, 2000);
        } else {
            setLoginSuccess(`welcome ${userName}`)
            setTimeout(() => {
                setLoginSuccess("")
                // changing the state of dashboard
                showDashboard(true)
            }, 2000);

        }
    }
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="h-2/3 bg-slate-800 text-white w-2/3 sm:h-2/3 sm:w-1/2 md:w-1/4 md:h-2/3 flex flex-col">
                <h4 className='justify-center text-2xl font-serif font-semibold capitalize items-center'>login page</h4>
                {
                    loginSucces.length > 0 ? (<p className='text-green'>{loginSucces}</p>) : null
                }

                {
                    userNameError.length > 0 ? (<p className='text-red'>{userNameError}</p>) : null
                }
                <input type='text' value={userName}
                    className='bg-white text-black w-[70%] justify-center ml-4 py-2 px-2 mt-3 rounded-md'
                    placeholder='username'
                    onChange={(event) => {
                        setUserName(event.target.value)
                    }}
                />
                {
                    passwordError.length > 0 ? (<p className='text-red'>{passwordError}</p>) : null
                }
                <input type='text' value={password}
                    className='bg-white text-black w-[70%] justify-center ml-4 py-2 px-2 mt-5 rounded-md'
                    placeholder='password'
                    onChange={(event) => {
                        setPassword(event.target.value)
                    }}
                />
                <button className='bg-cyan-400 text-black w-[70%] justify-center ml-4 py-2 px-2 mt-5 rounded-md
                text-capitalize font-semibold font-serif tet-2xl'
                    onClick={HandleLogin}
                >
                    login</button>
            </div>
        </div>
    )
}

export default Login