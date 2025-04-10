"use client"
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { AuthButton } from "@/ui-components/auth-button";

export default function LandingPage() {
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
      <div className="flex justify-end items-center p-4 gap-4 h-16">
      <AuthButton/>
     </div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, corporis aliquam doloribus asperiores expedita tempora fuga aperiam praesentium totam perferendis ipsa in delectus quisquam mollitia ad consequatur laborum! Non ea impedit nemo, quod numquam odio suscipit magnam tempore quas, commodi aliquid eos quis temporibus tenetur cupiditate ipsa nesciunt eaque dicta laborum consequuntur ab? Facere sapiente dolor, odit, vero, nisi vitae illo porro consectetur culpa provident delectus? Perferendis, voluptate autem! Omnis saepe odit officiis numquam explicabo, perferendis sint. Deleniti illo perspiciatis amet vel, accusantium molestias. Reprehenderit tempora sint voluptates, adipisci perspiciatis et eveniet commodi! Consequuntur dolorem impedit quo alias obcaecati quia placeat maiores libero veritatis, ipsum molestiae accusamus eum delectus quasi autem vel commodi. Atque voluptatibus, esse, quia asperiores placeat deleniti unde aspernatur maxime maiores rem perferendis quas eligendi, eum adipisci iste possimus! Saepe et quas expedita tenetur quod eligendi placeat explicabo, sequi veniam recusandae animi aliquid! Ut, consectetur. Repellendus, eius.</h1>
    </div>
  </>
  
  );
}
