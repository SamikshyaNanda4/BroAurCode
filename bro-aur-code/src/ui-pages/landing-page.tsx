"use client"
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { AuthButton } from "@/ui-components/auth-button";
import Image from "next/image";
import { Pointer } from "lucide-react";
import { BackgroundLines } from "@/components/ui/background-lines";

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
      <div key={1} className="flex justify-between items-center p-4 gap-4 h-17 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.5)] mb-1 z-50  ">
     {
      isLoaded && (
        // <div className="w-md:mr-160 w-sm:mr-15 ">
        <Image src={"/Logo.png"} alt="Logo" width={150} height={50} style={{cursor:"pointer"}}></Image>
        /* </div> */
      )
     }
      <AuthButton/>
      </div>
     <div key={2}>
     {/* <h1>Lorem ipsum dolor sit amet c onsectetur adipisicing elit. Esse, corporis aliquam doloribus asperiores expedita tempora fuga aperiam praesentium totam perferendis ipsa in delectus quisquam mollitia ad consequatur laborum! Non ea impedit nemo, quod numquam odio suscipit magnam tempore quas, commodi aliquid eos quis temporibus tenetur cupiditate ipsa nesciunt eaque dicta laborum consequuntur ab? Facere sapiente dolor, odit, vero, nisi vitae illo porro consectetur culpa provident delectus? Perferendis, voluptate autem! Omnis saepe odit officiis numquam explicabo, perferendis sint. Deleniti illo perspiciatis amet vel, accusantium molestias. Reprehenderit tempora sint voluptates, adipisci perspiciatis et eveniet commodi! Consequuntur dolorem impedit quo alias obcaecati quia placeat maiores libero veritatis, ipsum molestiae accusamus eum delectus quasi autem vel commodi. Atque voluptatibus, esse, quia asperiores placeat deleniti unde aspernatur maxime maiores rem perferendis quas eligendi, eum adipisci iste possimus! Saepe et quas expedita tenetur quod eligendi placeat explicabo, sequi veniam recusandae animi aliquid! Ut, consectetur. Repellendus, eius.</h1>
     <Image src={"/BroLanding.webp"} alt="bro aur logo" width={700} height={500} className="mx-auto"/> */}
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        BroAurCode <br /> Solve DSA the Desi Way 🇮🇳
      </h2>
      <p className="max-w-xl mx-auto text-xl md:text-lg text-neutral-400 text-center">
      Kyunki Bro, apni bhasha mein samajhna sabse easy hota hai.
      </p>
    </BackgroundLines>
     </div>
    </div>
    
  </>
  
  );
}

export default LandingPage;