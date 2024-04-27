//Dashboard : For Frontend, Here we use useSession() hook for session data and status . 
//getUser : For Backend, Here we use getServerSession() to protect an API Route.

"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const Dashboard = () => {
    const { data: session } = useSession() //object destructuring to extract the data property from the object returned by the useSession() hook and assign it to a variable named session.
    return (
        <>
            {session ?
                <>  
                    <img src={session.user?.image as string} className=' rounded-full' />
                    <h1 className=' text-gray-400 text-2xl font-bold mt-5'>Welcome Back, {session.user?.name}</h1>
                    {session.user?.email}
                    <button onClick={()=>{signOut({callbackUrl:`/`})}} className=' border border-black rounded-lg bg-red-300 py-1 px-5'>Sign out</button>

                </>
                :
                <>
                    <h1 className=' text-red-500 text-3xl font-bold'>You're not Logged In</h1>
                    <div className=' flex space-x-2 mt-2'>
                    <button onClick={()=>{signIn("google")}} className=' border border-black rounded-lg bg-green-400 py-1 px-5'>Sign in with Google</button>
                    <button onClick={()=>{signIn("github")}} className=' border border-black rounded-lg bg-blue-400 py-1 px-5'>Sign in with Github</button>
                    </div>
                </>
            }
        </>
    )
}

export default Dashboard