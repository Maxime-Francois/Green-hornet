import React from "react";
import Image, { StaticImageData } from "next/image";
import Rating from './Rating'; 
import Link from 'next/link';
import { formatPrice } from "@/app/utils/formatPrice";

interface ProductCardProps {
    product: {
   name: string;
  category: string;
  id: string;
  cover: StaticImageData,
  price: number,
  rating:number,
  description:string,
  inStock:boolean,
   
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div key={product.id} className="px-4">
      <Link href={`/product/${product.id}`} passHref>
        <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl ease-in-out duration-300">
          <Image
            src={product.cover}
            alt={product.name}
            className="object-cover w-full h-40 mb-4 rounded-lg"
            width={400} // Remplacez cette valeur par la largeur réelle de votre image en pixels
            height={400}
          />
          <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-2">{product.category}</p>
          <Rating value={product.rating} />
          <p className="text-gray-600 mb-2">{formatPrice(product.price)}</p>

          {/* Ajoutez ici d'autres informations du produit si nécessaire */}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
