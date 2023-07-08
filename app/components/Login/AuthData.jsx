'use client';
import { useState } from "react"
import { toast } from "react-hot-toast"
import {signIn} from "next-auth/react"
import axios from "axios"
import React from "react";
import {useRouter} from "next/navigation"
export const AuthData = ({formState}) => {
  const router = useRouter();
  const [data, setData] = useState({
    name: '',
     email: '',
      password: ''
    })

  const signupFormSubmit =  (e) => {
    e.preventDefault()
    axios.post('/api/register', data)
    .then(() => {toast.success('User has been registered!');
  loginFormSubmit();})
    .catch(() => toast.error('Something went wrong!'))
  }
  const loginFormSubmit = async (e=null) => {
    if(e)
    {
      e.preventDefault()
    }
   
    signIn('credentials',
     {...data, redirect: false
    })
    .then((callback) => {
        if (callback?.error) {
            toast.error(callback.error)
        }

        if(callback?.ok && !callback?.error) {
            toast.success('Logged in successfully!')
            router.push('/dashboard')
        }
    } )
}
  return (
    <form  onSubmit={!formState?signupFormSubmit:loginFormSubmit} className={(!formState?"h-[23rem] ":"h-80 ")+"bg-white  rounded-2xl flex-col justify-center items-center border-2 px-8 pt-4 font-lato md:w-96"}>
          {!formState&&<><p className="mt-4">Name</p>
      <input type="text" className=" p-2 w-full  h-10 border-2 rounded-xl"  onChange={e => setData({ ...data, name: e.target.value })} /></>}
      <p className="mt-4">Email Address</p>
      <input type="email" className="p-2 w-full h-10 border-2 rounded-xl "      onChange={e => setData({ ...data, email: e.target.value })} />
      <p className="mt-4">Password</p>
      <input type={!formState?"text":"password"}  className=" p-2 w-full  h-10 border-2 rounded-xl"  onChange={e => setData({ ...data, password: e.target.value })}/>
      {formState&&<p className="text-link mt-4">Forgot password?</p>}
      <button type="submit" className=" w-full h-10 rounded-xl bg-black text-white font-montserrat font-bold text-base mt-4 ">{formState?"Sign In":"Register"}</button>
    </form>
      

  )
}
