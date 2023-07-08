import { signIn } from "next-auth/react"
import {Google} from "../../assets/Google.jsx"
import {Github} from "../../assets/Github.jsx"
import propTypes from "prop-types"

 const AuthButton = ({name,id,formState}) => {
    let x = null
        switch(name) {
            case "google":
            x= <Google />
            break;
            case "github":
            x= <Github />
            break;
        }
    

  return (

    <button onClick={()=>{signIn(id)}} className="flex items-center justify-around h-8 rounded-xl bg-white font-montserrat text-xs font-normal text-secondarytext px-2 border-2 w-full ">
      {x}
      {formState?<p className="pl-2">Sign up with {name}</p>:<p className="pl-2">Sign in with {name}</p>}
    </button>
  )
}



export default AuthButton