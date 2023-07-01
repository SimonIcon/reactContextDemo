import React, { useContext, useState } from 'react'
import { AuthenticationContext } from '../contexts/AuthenticationContext'
const SignUp = ({ setIsLogin }) => {
    const { registerUsers } = useContext(AuthenticationContext);
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [passwordError, setPasswordError] = useState('')
    const [emailError, setEmailError] = useState("")
    const [success, setSuccess] = useState("")

    // validation email
    function isValidEmail(e) {
        const re = /\S+@\S+\.\S+/;
        return re.test(e);
    }
    // sign up function
    const handleSignUp = () => {
        // check if password length is greater than six character
        if (password.length < 6) {
            setPasswordError("password must have atleast six character")
            setTimeout(() => {
                setPasswordError('')
                setPassword('')
            }, 2000);
        } else if (!isValidEmail(email)) {
            setEmailError("invalid email string")
            setTimeout(() => {
                setEmailError('')
                setEmail('')
            }, 2000);
        } else {
            registerUsers(email, password)
            setSuccess("you have created account successfully")
            setTimeout(() => {
                setIsLogin(true)
            }, 2000);
        }
    }



    return (
        <div>
            <h4 className='justify-center text-2xl font-serif font-semibold capitalize text-center 
            underline mb-10'>sign up</h4>

            {success.length > 0 ? (<h5 className='text-cyan-700 text-center font-semibold'>
                {success}</h5>) : null}
            <input type='email' value={email}
                className='bg-white text-black w-[80%] justify-center ml-6 py-2 px-2 mt-3 rounded-md'
                placeholder='username'
                onChange={(event) => {
                    setEmail(event.target.value)
                }}
            />
            {emailError.length > 0 ? (<p className='text-red-600 ml-6 font-light font-sans text-sm'>
                {emailError}</p>) : null}
            <input type='password' value={password}
                className='bg-white text-black w-[80%] justify-center ml-6 py-2 px-2 mt-5 rounded-md'
                placeholder='password'
                onChange={(event) => {
                    setPassword(event.target.value)
                }}
            />
            {passwordError.length > 0 ? (<p className='text-red-600 ml-6 font-light font-sans text-sm'>
                {passwordError}</p>) : null}
            <button className='bg-cyan-400 text-black w-[80%] justify-center ml-6 py-2 px-2 mt-5 rounded-md
                text-capitalize font-semibold font-serif tet-2xl'
                onClick={handleSignUp}
            > sign up</button>
            <p className='ml-7 font-sans font-light text-lg mr-6 mt-5'>
                Already have an account
                <span className='ml-2 text-cyan-600 capitalize font-semibold underline'
                    onClick={() => setIsLogin(true)}
                >sign in</span></p>


        </div>

    )
}

export default SignUp