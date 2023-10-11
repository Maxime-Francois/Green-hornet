"use client";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import { useCart } from "../hooks/useCart";
import Heading from "../components/Heading";
import Button from "../components/Button";
import ItemContent from "./ItemContent";
import { formatPrice } from "../utils/formatPrice";
import { SafeUser } from "../types";
import { useRouter } from "next/navigation";

import useLoginModal from "@/app/hooks/useLogin";

interface CartClientProps {
  currentUser: SafeUser | null;
}

const CartClient: React.FC<CartClientProps> = ({ currentUser }) => {
  const { cartProducts, handleClearCart, cartTotalAmount } = useCart();

  const router = useRouter();
  const loginModal = useLoginModal();

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">Votre Panier est vide</div>
        <div>
          <Link
            href={"/"}
            className="
                    text-slate-500 flex items-center gap-1 mt-2"
          >
            <MdArrowBack />
            <span>Continuer les achats</span>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Heading title="Votre panier" center />
      <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8">
        <div className="col-span-2 justify-self-start">PRODUIT</div>
        <div className="justify-self-center">PRIX</div>
        <div className="justify-self-center">QUANTITÉ</div>
        <div className="justify-self-end">TOTAL</div>
      </div>
      <div>
        {cartProducts &&
          cartProducts.map((item) => {
            return <ItemContent key={item.id} item={item} />;
          })}
      </div>
      <div className="border-t-[1.5px] border-black-200 py-4 flex justify-between gap-4">
        <div className="w-[120px]">
          <Button
            label="Vider le panier"
            onClick={() => {
              handleClearCart();
            }}
            small
            outline
          />
        </div>
        <div className="text-sm flex flex-col gap-1 items-start">
          <div className="flex justify-between w-full text-base font-semibold">
            <span>Total</span>
            <span>{formatPrice(cartTotalAmount)}</span>
          </div>
          <p className="text-slate-500">
            Taxes et livraison calculés à l'étape suivante
          </p>
          <Button
            label={currentUser ? "Passer au paiement" : "Connectez vous"}
            outline={currentUser ? false : true}
            onClick={() => {
              currentUser ? router.push("/checkout") : loginModal.onOpen();
            }}
          />
          <Link
            href={"/"}
            className="
           text-slate-500 flex items-center gap-1 mt-2
           "
          >
            <MdArrowBack />
            <span>Continuer les achats</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
