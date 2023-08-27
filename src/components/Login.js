import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [issignin, setissignin ]= useState(true)
    const togglesigninform =()=>{
        setissignin(!issignin)
    }
  return (
    <div >
        <Header></Header>
        <div className='absolute '>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg '></img>
            </div>
        <form className=' absolute w-3/12 my-36  mx-auto left-0 right-0 bg-black p-12  text-white rounded-xl bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{ issignin? "Sign In":"Sign Up"}</h1>
            { !issignin &&
            <input type='text' placeholder='Name' className='p-4 my-4 w-full bg-gray-700'></input>
}
            <input type='email' placeholder='Email address' className='p-4 my-4 w-full bg-gray-700'></input>
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'></input>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' >{ issignin? "Sign In":"Sign Up"}</button>
            <p className='py-6 cursor-pointer' onClick={togglesigninform}>{issignin?
            "New to Netflix? Sign Up Now" : "Already registered? Sign In Now "} </p>
        </form>


    </div>
  )
}

export default Login