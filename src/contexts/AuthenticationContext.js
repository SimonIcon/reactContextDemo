import React, { useEffect, useState } from 'react'
import { createContext } from "react";
import auth from '../config/firebase';
import {
    createUserWithEmailAndPassword, onAuthStateChanged,
    sendPasswordResetEmail, signInWithEmailAndPassword, signOut
} from 'firebase/auth';

// creating context
export const AuthenticationContext = createContext({})

const Context = ({ children }) => {
    // context variables
    const [dashboard, showDashboard] = useState(false)
    const [userData, setUserData] = useState([])

    // this is a global function that keep state while each user authentication state changes
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                console.log(uid)
            } else {
                console.log("this user is not available")
            }
        });
    }, []);










    // handleSignUp
    const [loginComment, setLoginComment] = useState('')
    const registerUsers = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password).then((userDetails) => {
            setLoginComment("you have created you account")
            setTimeout(() => {
                setLoginComment('')
            }, 2000);
            console.log(userDetails)
        }).catch((error) => {
            console.log("error while creating user")
        })
    }

    // handle forgot password

    const handleForgotPassword = (email) => {
        sendPasswordResetEmail(auth, email).then((res) => {
            setLoginComment("check your email to update your password")
            setTimeout(() => {
                setLoginComment("")
            }, 3000);
        }).catch((error) => {
            console.log("error occurred")
        })
    }

    // login handle


    const loginInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userDetails) => {
                if (userDetails.user) {
                    setLoginComment(`welcome ${userDetails.user.email}`)
                    setUserData(userDetails.user)
                    setTimeout(() => {
                        setLoginComment('')
                        showDashboard(true)
                    }, 2000);
                }

            }).catch((error) => {
                if (error.code === "auth/user-not-found") {
                    // Handle the case when user is not found
                    setLoginComment("invalid credentials")
                    setTimeout(() => {
                        setLoginComment('')
                    }, 2000);

                } else {
                    // Handle other sign-in errors
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                }
            })
    }
    const logOutUser = () => {
        signOut(auth)
    }


    return (
        <AuthenticationContext.Provider value={{
            showDashboard, dashboard, loginInUser, handleForgotPassword,
            loginComment, registerUsers, userData, logOutUser
        }}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export default Context