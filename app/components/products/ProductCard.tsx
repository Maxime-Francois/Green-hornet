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
    <div key={product.id} className="">
      <Link href={`/product/${product.id}`} passHref>
        <div className="bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl ease-in-out duration-300 hover:scale-110">
          <Image
            src={product.cover}
            alt={product.name}
            className="object-cover w-full h-40 mb-4 rounded-lg"
            width={400} // Remplacez cette valeur par la largeur réelle de votre image en pixels
            height={400}
          />
          <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-2">{product.category}</p>
          <Rating value={productRating} readOnly />
          <p className="text-gray-600 mb-2">{formatPrice(product.price)}</p>

          {/* Ajoutez ici d'autres informations du produit si nécessaire */}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
