"use client"
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { AuthButton } from "@/ui-components/auth-button";
import Image from "next/image";
import { Pointer } from "lucide-react";

const  LandingPage =()=> {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return; 

    if (isSignedIn) {
      router.push("/home");
    } else {
      router.push("/");
    }
  }, [isLoaded, isSignedIn, router]);
  return (
    <>
  <div>
      <div className="flex justify-between items-center p-4 gap-4 h-17 shadow-md mb-4 bg-amber-50 ">
     {
      isLoaded && (
        // <div className="w-md:mr-160 w-sm:mr-15 ">
        <Image src={"/Logo.png"} alt="Logo" width={150} height={50} style={{cursor:"pointer"}}></Image>
        /* </div> */
      )
     }
      <AuthButton/>
      </div>
      <h1>Lorem ipsum dolor sit amet c onsectetur adipisicing elit. Esse, corporis aliquam doloribus asperiores expedita tempora fuga aperiam praesentium totam perferendis ipsa in delectus quisquam mollitia ad consequatur laborum! Non ea impedit nemo, quod numquam odio suscipit magnam tempore quas, commodi aliquid eos quis temporibus tenetur cupiditate ipsa nesciunt eaque dicta laborum consequuntur ab? Facere sapiente dolor, odit, vero, nisi vitae illo porro consectetur culpa provident delectus? Perferendis, voluptate autem! Omnis saepe odit officiis numquam explicabo, perferendis sint. Deleniti illo perspiciatis amet vel, accusantium molestias. Reprehenderit tempora sint voluptates, adipisci perspiciatis et eveniet commodi! Consequuntur dolorem impedit quo alias obcaecati quia placeat maiores libero veritatis, ipsum molestiae accusamus eum delectus quasi autem vel commodi. Atque voluptatibus, esse, quia asperiores placeat deleniti unde aspernatur maxime maiores rem perferendis quas eligendi, eum adipisci iste possimus! Saepe et quas expedita tenetur quod eligendi placeat explicabo, sequi veniam recusandae animi aliquid! Ut, consectetur. Repellendus, eius.</h1>
      <Image src={"/BroLanding.webp"} alt="bro aur logo" width={700} height={500} className="mx-auto"/>
    </div>
    
  </>
  
  );
}

export default LandingPage;