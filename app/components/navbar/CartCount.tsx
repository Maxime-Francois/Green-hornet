'use client'

import { useCart } from "@/app/hooks/useCart";
import { useRouter } from "next/navigation"
import {SlBasket} from 'react-icons/sl'


const CartCount = () => {
    const {cartTotalQty} = useCart();
    const router = useRouter()
  return (
    <div
      className="relative cursor-pointer"
      onClick={() => router.push("/cart")}
    >
      <SlBasket size={25} color="black"/>
      <span className="absolute top-[-10px]
      right-[-10px]
      bg-slate-700
      text-white
      h-5
      w-5
      rounded-full
      flex
      items-center
      justify-center
      text-xs
      ">{cartTotalQty}</span>
    </div>
  );
}

export default CartCount