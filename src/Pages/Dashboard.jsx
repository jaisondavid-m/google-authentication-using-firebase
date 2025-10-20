import React from 'react'
import { logout } from './../firebase'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from './../firebase';

function Dashboard() {

    const [user] = useAuthState(auth);
    console.log(user);


    return (

        <div className=''>
            <h1 className='bg-blue-500 text-white  text-4xl font-bold p-4 text-center '>Data's From Google Account</h1>
            <h1 className='my-5 text-center text-4xl'>Hi Bro , {user.displayName}</h1>
            <div className='border-2 font-bold gap-y-5 w-[90%] md:w-[60%] sm:w-[60%] lg:w-[40%] mx-auto p-5 flex flex-col justify-center mt-5 bg-blue-400 text-white'>
                <img src={user.photoURL} className='h-50 w-50 mx-auto rounded-full border-2' />
                <h1 className=''>Name : {user.displayName}</h1>
                <h1>Email : {user.email}</h1>
                <h1>Phone no : {user?.phoneNumber ? user.phoneNumber : "Not added"} </h1>
                <h1>Email Verified : {user.emailVerified ? "Yes ✅" : "No ❌"}</h1>
                <h1>First Login to Our Page :{new Date(Number(user.metadata.createdAt)).toLocaleString()}</h1>
                <h1>Last Login At :{new Date(Number(user.metadata.lastLoginAt)).toLocaleString()}</h1>
            </div>
            <button className='bg-blue-500 text-white rounded-2xl p-2 mx-auto mt-10 w-20 flex justify-center ' onClick={logout}>Logut</button>
        </div>
    )
}

export default Dashboard
