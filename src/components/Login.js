import React, { useContext, useState } from 'react'
import { AuthenticationContext } from '../contexts/AuthenticationContext'
const Login = ({ setIsLogin }) => {
    // getting AuthenticationContext state variables
    const { loginInUser, loginComment, handleForgotPassword } = useContext(AuthenticationContext)
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    return (

        <div>
            <h4 className='justify-center text-2xl font-serif font-semibold capitalize text-center 
            underline mb-10'>sign in</h4>
            {loginComment.length > 0 ? (<p className='text-cyan-700 text-center font-semibold
            capitalize'>{loginComment}</p>) : null}
            <input type='text' value={userEmail}
                className='bg-white text-black w-[80%] justify-center ml-6 py-2 px-2 mt-3 rounded-md'
                placeholder='email'
                onChange={(event) => {
                    setUserEmail(event.target.value)
                }}
            />
            <input type='text' value={userPassword}
                className='bg-white text-black w-[80%] justify-center ml-6 py-2 px-2 mt-5 rounded-md'
                placeholder='password'
                onChange={(event) => {
                    setUserPassword(event.target.value)
                }}
            />
            <button className='bg-cyan-400 text-black w-[80%] justify-center ml-6 py-2 px-2 mt-5 rounded-md
                text-capitalize font-semibold font-serif tet-2xl'
                onClick={() => loginInUser(userEmail, userPassword)}
            > login</button>
            <p className='ml-7 mt-2 font-sans font-light text-sm mr-6'>Don`t recall your password,
                type your email and click here
                <span className='ml-2 text-cyan-600 capitalize font-semibold'
                    onClick={() => handleForgotPassword(userEmail)}
                >click here</span></p>
            <p className='ml-7 mt-6 font-sans font-light text-lg mr-6'>
                Don`t have an account
                <span className='ml-2 text-cyan-600 capitalize font-semibold underline'
                    onClick={() => setIsLogin(false)}
                >sign up</span></p>

        </div>

    )
}

export default Login