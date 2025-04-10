"use client";
import  { useState,useEffect } from "react";
import Navbar from "@/ui-components/navbar";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
    const{isSignedIn,isLoaded,user}=useUser();
    const[info,setInfo]=useState(null);
    const router=useRouter();
    
    useEffect(() => {
        if (!isLoaded) router.push("/"); 
    
        if (!isSignedIn) {
          router.push("/sign-up");
        }
      }, [isLoaded, isSignedIn, router]);
  return (
     <>
  <div>
    <Navbar/>
      <h1><b className="text-amber-700">This is the page that is redirected to you after signin </b>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quos iure quaerat veritatis blanditiis nemo, inventore hic harum asperiores nisi, mollitia qui cumque sit ullam magni eveniet est omnis exercitationem! Numquam, odio dolorum eum eaque obcaecati magnam fugiat velit voluptate asperiores magni ipsa in molestias itaque repudiandae. Voluptas quaerat pariatur, neque laboriosam 
      </h1>
      {
        isSignedIn && (
            <div>
      {user.id}<br />
      {user.username}<br />
      {user.fullName}<br />
      {user.firstName}<br />
      {user.lastName}<br />
      {user.emailAddresses.map((email) => (
        <span key={email.id}>{email.emailAddress}<br /></span>
      ))}
      {user.primaryEmailAddress?.emailAddress}<br />
      <img src={user.imageUrl} alt="User Avatar" width="50" /><br />
      {user.phoneNumbers.map((phone, index) => (
        <span key={index}>{phone.phoneNumber??"N/A"}<br /></span>
      ))}
    </div>
        )
      }
    </div>
  </>
  
  );
}