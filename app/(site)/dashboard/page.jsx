'use client';
import React,{useEffect} from "react";
import LeftBox from "../../components/Dashboard/LeftBox";
import Dashboard from "../../components/Dashboard/Dashboard";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
// eslint-disable-next-line @next/next/no-async-client-component
const DashboardPage = (props) => {
  console.log("IN dashboard page")
  const { data: session, status } = useSession()
  const router = useRouter();
useEffect(() => {
  console.log("Status---------->",JSON.stringify(status));
  if (status !== 'authenticated') {
     router.push('/signin') 
  }
  console.log("Session in dash---------->",JSON.stringify(session));

})

  

return (
  <div className="flex-col bg-primary-100 overflow-y-scroll overflow-x-hidden 	h-screen md:h-screen md:flex  md:flex-row">
    <LeftBox />
    <Dashboard user={null}  />
  </div>
);
};
export default DashboardPage;
