import React, { useState } from 'react'
import Header from './Header'
import { AiOutlineGooglePlus } from "react-icons/ai";
import { supabase } from '../api/cliente'
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const [signup, setsignup] = useState(true);
    const [newuser, setNewuser] = useState({ email: '', password: '' });
    const [globalsession, setglobalsession] = useState(false)
    const navigate = useNavigate()

    const Handlersingup = async (e) => {

        e.preventDefault()
        const { data } = await supabase.auth.signUp({
            email: newuser.email,
            password: newuser.password,
        })
        setsignup(!signup)
        console.log(data)

    }

    const Handlerslogin = async (e) => {

        e.preventDefault()
        const { data } = await supabase.auth.signInWithPassword({
            email: newuser.email,
            password: newuser.password,
        })
        console.log(data)
        if (data.session.access_token) {
            navigate('/')
        }
        setglobalsession(true)

    }



    const Handlerform = (e) => {
        e.preventDefault()
        setsignup(!signup)
    }





    return (
        <>
            <div className=" bg-slate-100 dark:bg-black h-full">

                <div className="fixed top-0 w-full z-10">

                    <Header globalsession={globalsession}/>

                </div>

                <div className="min-h-screen flex items-center  justify-center ">
                    <form className='w-full px-5 sm:px-10  sm:w-4/5  md:px-16  md:w-4/5 lg:w-2/5 flex flex-col space-y-6 h-full bg-white dark:bg-black dark:border-slate-900 dark:border py-16'>
                        <h2 className='text-3xl dark:text-white text-center text-black mb-5'>{signup ? "Log in" : "Sign Up"}</h2>
                        <div className='flex flex-col gap-5'>
                            <input onChange={e => setNewuser({ ...newuser, email: e.target.value })} autoComplete='none' className='p-4 bg-slate-100 outline-none focus:bg-slate-800 focus:text-white' type="text" placeholder='Email' />
                            <input onChange={e => setNewuser({ ...newuser, password: e.target.value })} autoComplete='none' className='p-4 bg-slate-100 outline-none focus:bg-slate-800 focus:text-white' type="password" placeholder='Password' />
                        </div>
                        {signup ? <button onClick={e => Handlerslogin(e)} className='bg-blue-400 py-4 font-semibold'>Log in</button> : <button className='bg-blue-400 py-4 font-semibold' onClick={e => Handlersingup(e)}>Sign Up</button>}
                        <div className='flex items-center justify-center gap-3'>
                            <div className='border border-slate-200 dark:border-slate-800  w-1/2'></div>
                            <p className='text-center dark:text-white'>Or</p>
                            <div className='border border-slate-200 dark:border-slate-800  w-1/2'></div>
                        </div>
                        <div className='flex justify-center items-center gap-3 py-10 dark:text-white'>
                            <AiOutlineGooglePlus className='text-3xl' />
                            Log in with Google
                        </div>
                        <button onClick={Handlerform} className='text-center dark:text-white border-t-2 dark:border-slate-800  pt-6' >{signup ? "Don't have an account? Sign Up" : "You have an account? Get in"}</button>
                    </form>
                </div>


            </div>


        </>

    )
}
