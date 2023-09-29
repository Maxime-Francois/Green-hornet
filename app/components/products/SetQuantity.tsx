'use client'

import { CartProductType } from "@/app/product/[id]/ProductDetails";

interface SetQtyProps {
    cartCounter?:boolean;
    cartProduct: CartProductType;
    handleQtyIncrease: () => void;
    handleQtyDecrease: () => void;
}

const btnStyles = 'border-[1.2px] border-slate-300 px-2 rounded'
const SetQuantity: React.FC<SetQtyProps> = ({
    cartProduct, 
    cartCounter,
    handleQtyIncrease,
    handleQtyDecrease
}) => {
  return (
    <div className="flex gap-8 items-center pt-4">
        {cartCounter ? null : <div
         className="font-semibold">Quantité</div>}
         <div className="flex gap-4 items-center text-base">

            <button onClick={handleQtyDecrease} className=
            {btnStyles}>-</button>
            <div>{cartProduct.quantity}</div>
            <button onClick={handleQtyIncrease} className=
            {btnStyles}>+</button>
         </div>
    </div>
  )
}

export default SetQuantity