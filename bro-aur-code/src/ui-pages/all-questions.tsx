"use client"

import { useState,useEffect } from "react"
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Navbar from "@/ui-components/navbar"
import { Questions,questions } from "@/data/questionTableHardCoded";
import {columns} from "@/data/questionTableColumn"
import { QuestionTable } from "@/ui-components/questions-table";

const AllQuestionsPage=()=>{
    const [tabledata,setTableData]=useState<null | any>(null);
    const {user,isSignedIn,isLoaded}=useUser();
    const router=useRouter();
     useEffect(() => {
            if (!isLoaded) router.push("/"); 
        
            if (!isSignedIn) {
              router.push("/");
            }
          }, [isLoaded, isSignedIn, router]);


    return(
        <>
        <div className="flex flex-col h-screen bg-zinc-800">
            <Navbar/> 
            <QuestionTable columns={columns} data={questions}/>
            </div>
        </>
    )
}

export default AllQuestionsPage