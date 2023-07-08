'use client';
import React,{useEffect,useState} from "react";
import LeftBox from "../../components/Dashboard/Leftbox.jsx";
import Dashboard from "../../components/Dashboard/Dashboard.jsx";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import axios from "axios";
// eslint-disable-next-line @next/next/no-async-client-component
const DashboardPage = (props) => {

  const { data: session, status } = useSession()
  const [apiData, setApiData] = useState([]);
  const router = useRouter();
useEffect(() => {



  if (status !== 'authenticated') {
     router.push('/signin') 
  }
  console.log("Session in dash---------->",JSON.stringify(session));

})
//fetching data
useEffect(() => {
  axios.get('https://dummyjson.com/products').then((res)=> {
    setApiData(res.data.products);  
    console.log(res)}).catch((err)=> {console.log(err)});
}, [])

  

return (
  <div className="flex-col bg-primary-100 overflow-y-scroll overflow-x-hidden 	h-screen md:h-screen md:flex  md:flex-row">
    <LeftBox />
    <Dashboard data={apiData} user={session?.user}  />
  </div>
);
};
export default DashboardPage;
