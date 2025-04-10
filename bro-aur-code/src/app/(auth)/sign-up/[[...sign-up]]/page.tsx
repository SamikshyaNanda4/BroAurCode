"use client"
import { SignUp } from "@clerk/nextjs";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function Page() {
    const router = useRouter();

    useEffect(() => {
        // Replace current history state with this page to prevent going back
        history.pushState(null, "", window.location.href);
    
        const handlePopState = () => {
          // Prevent back navigation
          history.pushState(null, "", window.location.href);
        };
    
        window.addEventListener("popstate", handlePopState);
    
        return () => {
          window.removeEventListener("popstate", handlePopState);
        };
      }, []);
  return (
    <>
    <div className="flex justify-end items-center p-4 gap-4 h-16">
          <ChevronLeft className="cursor-pointer" onClick={()=>router.push("/")} />
         </div>
         <SignUp />
    </>
   
 );
}