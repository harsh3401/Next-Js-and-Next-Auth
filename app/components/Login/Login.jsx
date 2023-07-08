'use client';
import React ,{ useState,useEffect } from "react";

import { AuthData } from "./AuthData"
import  AuthButton  from "../Buttons/AuthButtons"
import {  getProviders } from "next-auth/react"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// eslint-disable-next-line @next/next/no-async-client-component
const Login= ()=> {
 
  const [formState,setFormState] = useState(true);
  const providers = {
 google:{name:"google",id:"google"},
 credentials:{name:"credentials",id:"credentials"},
 github:{name:"github",id:"github"},

  }
  const session = useSession()
  const router = useRouter();
  useEffect(() => {
    console.log("Session---------->",JSON.stringify(session));
    if (session?.status === 'authenticated') {
       router.push('/dashboard') 
    }

})

  const toggleform = () => {
  setFormState(!formState);
 
  }
  return (
    <div className="bg-primary-100 flex-1 flex  justify-center  h-full my-auto items-center">
      <div >
        <div className="text-4xl font-montserrat font-bold ">
        {formState?"Sign in":"Create an account"}
        </div>
        <div className={formState?"font-lato ":"font-lato m-10"}> 
            {formState&&"Sign in to your account"}
        </div>
        {<div className="md:flex md:justify-between mt-6 mb-4 w-full">
            {Object.values(providers).map((provider) => {

              if(provider.name==="credentials")
              {
                return <div key={"credentials"}className="w-4"></div>
              }
              return <AuthButton formState={!formState} key={provider.name} id={provider.id} name={provider.name} />
            })}

        </div>}
     
        <AuthData formState={formState}  />
  

        <div className="text-center text-secondarytext font-lato mt-4" onClick={toggleform}>
        {formState?"Don’t have an account?":"Have an account already?"}&nbsp;&nbsp;<span className="text-link hover:cursor-pointer">  {formState?"Register here":"Sign in"}</span>
        </div>
        </div>
  </div>


  )
}

export  default Login