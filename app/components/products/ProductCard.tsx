import React from "react";
import Image, { StaticImageData } from "next/image";

import Link from "next/link";
import { formatPrice } from "@/app/utils/formatPrice";
import { Rating } from "@mui/material";

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  return (
    <div key={product.id} className="product rounded-lg ">
      <Link href={`/product/${product.id}`} passHref>
        <div className="bg-white  p-4 cursor-pointer rounded-lg ease-in-out duration-300 card hover:scale-110  ">
          <Image
            src={product.cover}
            alt={product.name}
            className=" object-contain w-full h-40 rounded-lg"
            width={500} // Remplacez cette valeur par la largeur réelle de votre image en pixels
            height={500}
          />
          <h2 className="text-lg font-semibold mb-2 mt-2">{product.name}</h2>

          <div className="flex items-end gap-1">
            <Rating value={productRating} readOnly />
            <div className="text-xs font-extralight">{product.reviews.length} avis</div>
          </div>

          <p className="text-b-600 mb-2">{formatPrice(product.price)}</p>
         

          {/* Ajoutez ici d'autres informations du produit si nécessaire */}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
