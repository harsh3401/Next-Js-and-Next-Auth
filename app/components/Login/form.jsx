
import { AuthData } from "./AuthData"
import  AuthButton  from "../Buttons/AuthButtons"
import React from "react";
const Login = () => {
  const [formState,setFormState] = useState(true);
  const switchForm = () => {
    setFormState(!formState);
  }

  return (
    <div className="bg-primary-100 flex-1 flex  justify-center  h-full my-auto items-center">
      <div>
        <div className="text-4xl font-montserrat font-bold ">
            Sign In
        </div>
        <div className="font-lato"> 
            Sign in to your account
        </div>
        <div className="md:flex  mt-6 mb-4 w-full">
            <AuthButton name="Google" />
            <div className="h-2 md:w-8"></div>
            <AuthButton name="Apple"/>
        </div>
        <AuthData />

        <div className="text-center text-secondarytext font-lato mt-4" >
 
        </div>
        </div>
    </div>
  )
}

export default Login