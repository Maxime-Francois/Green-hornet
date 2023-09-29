
'use client';

import Rating from "@/app/components/products/Rating";
import Image, { StaticImageData } from "next/image";
import { useCallback, useState } from "react";
import GramPrice from "./GramPrice";
import SetQuantity from "@/app/components/products/SetQuantity";
import Button from "@/app/components/products/Button";

interface ProductDetailsProps {
    product: any
}

export type CartProductType = {
    id:String,
    name: String,
    category:String,
    cover: StaticImageData,
    price: number,
    rating:number,
    description:string,
    quantity:number
 

}

const ProductDetails: React.FC<ProductDetailsProps> =
({product}) => {

    const [cartProduct, setCartProduct] =
    useState<CartProductType>({
    id:product.id,
    name:product.name ,
    category:product.category,
    cover: product.cover,
    price: product.price,
    rating:product.rating,
    description:product.description,
    quantity:1
    })

const handleQtyIncrease = useCallback(() => {

 if(cartProduct.quantity === 99) {
        return;
    }

    setCartProduct((prev) => {
        return {...prev, quantity: ++prev.quantity}
    })
}, [cartProduct]);
const handleQtyDecrease = useCallback(() => {
    if(cartProduct.quantity === 1) {
        return;
    }

     setCartProduct((prev) => {
        return {...prev, quantity: --prev.quantity}
    })
}, [cartProduct]);


  return (
   
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
             <Image
            src={product.cover}
            alt={product.name}
            className="w-full mb-4 rounded-lg"
          /> 
          
        </div>
        <div className="flex flex-col gap-1 text-neutral-500 text-sm">
            <h2 className="text-3xl font-medium text-neutral-700 pb-2">
               {product.name} 
            </h2> 
             <Rating value={product.rating} />  
             <div>{product.description}</div> 
             <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
                 {product.inStock ? "En stock" : "Rupture de stock"}
             </div>
             <div className="flex flex-col gap-3">
                <h3>Choisissez la quantité :</h3>
                 <GramPrice defaultGrams={2} /> {/* Le bouton 2g est sélectionné par défaut */}
             </div>
             <SetQuantity 
                cartProduct={cartProduct}
                handleQtyIncrease={handleQtyIncrease}
                handleQtyDecrease={handleQtyDecrease}
             />
             <div className="pt-4 max-w-[300px]" >
                <Button
                label="Ajouter au panier"
                onClick= {() => {}}
                />
             </div>
        </div>
    </div>
   
  )
}

export default ProductDetails