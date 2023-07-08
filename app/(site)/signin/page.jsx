"use client";
import React from "react";
import { Branding } from "../../components/Login/Branding.jsx";
import Login  from "../../components/Login/Login.jsx";
import { useSession} from "next-auth/react";
import { useRouter } from "next/navigation";

 // eslint-disable-next-line @next/next/no-async-client-component
 export default function LoginPage() {

  return (
    <div className="md:flex h-screen bg-primary-100 items-center">
      <Branding />
      <Login  />
    </div>
  );
}

