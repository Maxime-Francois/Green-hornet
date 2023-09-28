
'use client';

import Rating from "@/app/components/products/Rating";
import Image from "next/image";

interface ProductDetailsProps {
    product: any
}


const ProductDetails: React.FC<ProductDetailsProps> =
({product}) => {
  return (
   
    <div className=" grid grid-cols-1 md:grid-cols-2">
        <div>
            {/* <Image
            src={product.cover}
            alt={product.name}
            className="object-cover w-full h-full mb-4 rounded-lg"
          /> */}
          image
        </div>
        <div className="flex flex-col gap-1 text-neutral-500 text-sm">
            <h2 className="text-3xl font-medium text-neutral-700">
               {product.name} 
            </h2> 
             <Rating value={product.rating} />  
             <div>{product.description}</div> 
             <div className="flex gap-2">
                <span className="font-semibold">
                    Categorie: 
                </span>
                 {product.category}
             </div>
             <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
          {product.inStock ? "En stock" : "Rupture de stock"}
             </div>
        </div>
    </div>
   
  )
}

export default ProductDetails