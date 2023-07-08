"use client";
import { User } from "./components/test";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
// eslint-disable-next-line @next/next/no-async-client-component
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/signin");
  });
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div>
        <h1>Redirecting</h1>
      </div>
    </main>
  );
}
