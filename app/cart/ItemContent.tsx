"use client";
import Link from "next/link";
import { CartProductType } from "../product/[id]/ProductDetails";
import { formatPrice } from "../utils/formatPrice";
import Image from "next/image";
import SetQuantity from "../components/products/SetQuantity";
import { useCart } from "../hooks/useCart";

interface ItemContentProps {
  item: CartProductType;
  totalPrice: number;
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
  const {
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
  } = useCart();

   const displayPrice =
     item.category === "Huiles" || item.category === "Accessoires"
       ? item.price
       : item.totalPrice;

  return (
    <div
      className="
    grid
    grid-cols-5
    text-xs
    md:text-sm
    gap-4
    border-t-[1.5px]
    border-slate-200
    py-4
    items-center
    "
    >
      <div
        className="
        col-span-2
        justify-start
        flex
        gap-2
        md:gap-4
        "
      >
        <Link href={`/product/${item.id}`}>
          <div className="relative w-[100px] aspect-square">
            <Image
              src={item.cover}
              alt={item.name}
              width={100} // Remplacez cette valeur par la largeur réelle de votre image en pixels
              height={100}
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between">
          <div className="text-xl">
            <Link href={`/product/${item.id}`}>{item.name}</Link>
          </div>

          <div className="justify-self-center ">
            <p className="text-slate-500 flex gap-2">
              Quantité:{" "}
              <span className="text-black">{item.selectedGrams} Grammes</span>
            </p>
          </div>
          <div className="w-[70px]">
            <button
              className="text-slate-500 underline"
              onClick={() => handleRemoveProductFromCart(item)}
            >
              supprimer
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">{formatPrice(displayPrice)}</div>
      <div className="justify-self-center">
        <SetQuantity
          cartCounter={true}
          cartProduct={item}
          handleQtyIncrease={() => {
            handleCartQtyIncrease(item);
          }}
          handleQtyDecrease={() => {
            handleCartQtyDecrease(item);
          }}
        />
      </div>
      <div className="justify-self-end font-semibold">
        {formatPrice(displayPrice * item.quantity)}
      </div>
    </div>
  );
};

export default ItemContent;
