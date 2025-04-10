"use client";
import {UserCircleIcon} from "lucide-react";
import { UserButton,SignInButton,SignedIn,SignedOut,SignUpButton } from "@clerk/nextjs";
import {Button} from "@/components/ui/button";

export const AuthButton=()=>{
    return(
        <div className="flex gap-4">
            <SignedIn>
                <UserButton/>
            </SignedIn>
            <SignedOut>
                <SignInButton mode="modal">
                   <Button variant="outline" className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-amber-50 border-blue-500 hover:bg-blue-500 cursor-pointer">
                   <UserCircleIcon/>
                   Sign In
                   </Button>
                </SignInButton>
            </SignedOut>
        </div>
    )
}