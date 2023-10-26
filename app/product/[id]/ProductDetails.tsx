"use client";

import React, { useCallback, useEffect, useState } from "react";
import GramPrice from "./GramPrice";
import SetQuantity from "@/app/components/products/SetQuantity";
import Button from "@/app/components/products/Button";
import { useCart } from "@/app/hooks/useCart";
import { MdCheckCircle } from "react-icons/md";

import { Rating } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

interface ProductDetailsProps {
  product: any;
  
}

export type CartProductType = {
  id: String;
  name: String;
  category: String;
  cover: StaticImageData;
  price: number;
  rating: number;
  description: string;
  quantity: number;
  selectedGrams: number;
  grams: number;
  totalPrice: number;
  
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { handleAddProductToCart, cartProducts } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [selectedGrams, setSelectedGrams] = useState(2);
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    category: product.category,
    cover: product.cover,
    price: product.price,
    rating: product.rating,
    description: product.description,
    quantity: 1,
    selectedGrams: selectedGrams,
    grams: selectedGrams,
    totalPrice:0,
   
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();

  // Fonction pour mettre à jour le prix total
  const handleTotalPriceChange = (totalPrice: number) => {
    setTotalPrice(totalPrice);
  };
  const handleGramChange = (grams: number) => {
    setSelectedGrams(grams);
  };
  useEffect(() => {
    setIsProductInCart(false);
    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === product.id
      );
      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts, product.id]);

  const handleQtyIncrease = useCallback(() => {
    if (cartProduct.quantity === 99) {
      return;
    }

    setCartProduct((prev) => {
      return { ...prev, quantity: ++prev.quantity };
    });
  }, [cartProduct]);

  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return;
    }

    setCartProduct((prev) => {
      return { ...prev, quantity: --prev.quantity };
    });
  }, [cartProduct]);

  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;
    console.log(totalPrice)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <Image
          src={product.cover}
          alt={product.name}
          className="w-full mb-4 rounded-lg"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col gap-1 text-neutral-500 text-sm">
        <h2 className="text-3xl font-medium text-neutral-700 pb-2">
          {product.name}
        </h2>
        <div className="flex items-center gap-2">
          <Rating value={productRating} readOnly />
          <div>{product.reviews.length} avis</div>
        </div>

        <div></div>
        <div>{product.description}</div>
        <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
          {product.inStock ? "En stock" : "Rupture de stock"}
        </div>

        {/* affichage du prix normal pour les catégories Accessoires et Huiles  */}

        {product.category === "Accessoires" || product.category === "Huiles" ? (
          <div>
            <p className="font-bold text-xl text-neutral-700">
              {product.price.toFixed(2)} €
            </p>
          </div>
        ) : (
          // affichage du prix au gramme pour les autres catégories
          <div className="flex flex-col gap-3">
            <h3>Choisissez la quantité :</h3>
            <GramPrice
              product={product}
              onGramChange={handleGramChange}
              selectedGrams={selectedGrams}
              onTotalPriceChange={handleTotalPriceChange}
            />
          </div>
        )}

        <SetQuantity
          cartProduct={cartProduct}
          handleQtyIncrease={handleQtyIncrease}
          handleQtyDecrease={handleQtyDecrease}
        />
        <div className="pt-4 max-w-[300px]">
          <Button
            label="Ajouter au panier"
            onClick={() => {
              const productToAdd = {
                ...cartProduct,
                selectedGrams: selectedGrams, // Mettez à jour les grammes sélectionnés
                grams: selectedGrams,
                totalPrice: totalPrice, // Mettez à jour les grammes
              };
              handleAddProductToCart(productToAdd);
            }}
          />
          {isProductInCart ? (
            <>
              <p className="mb-2 text-slate-500 flex items-center gap-1 mt-4">
                <MdCheckCircle className="text-weedColor" size={20} />
                <span>Produit ajouté au panier</span>
              </p>
              <div className="pt-4 max-w-[300px]">
                <Button
                  label="Voir le Panier"
                  outline
                  onClick={() => {
                    router.push("/cart");
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <p></p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
