'use client';

import Image from "next/image"
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

  return (
    <div className="
                    flex
                    flex-row
                    items-center
                    justify-between
                    gap-3
                    md:gap-3
    ">
    <Image 
        alt="logo" 
        className="hidden md:block cursor-pointer"
        height="60"
        width="60"
        src="/images/hornet-logo.svg"
    />
    <h1 className="text-2xl tracking-wider font-sans">
GREEN HORNET CBD
    </h1> 
    </div>
 
  )
}

export default Logo