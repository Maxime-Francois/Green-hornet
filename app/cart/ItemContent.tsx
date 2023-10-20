"use client";
import Link from "next/link";
import { CartProductType } from "../product/[id]/ProductDetails";
import { formatPrice } from "../utils/formatPrice";
import Image from "next/image";
import SetQuantity from "../components/products/SetQuantity";
import { useCart } from "../hooks/useCart";

interface ItemContentProps {
  item: CartProductType;
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
  const {
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
  } = useCart();
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
          <div className="relative w-[70px] aspect-square">
            <Image
              src={item.cover}
              alt={item.name}
              width={70} // Remplacez cette valeur par la largeur réelle de votre image en pixels
              height={70}
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between">
          <Link href={`/product/${item.id}`}>{item.name}</Link>
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
      <div className="flex justify-center">{formatPrice(item.price)}</div>
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
        {formatPrice(item.price * item.quantity)}
      </div>
    </div>
  );
};

export default ItemContent;
