"use client";

import {
  useStripe,
  useElements,
  PaymentElement,
  AddressElement,
} from "@stripe/react-stripe-js";
import { useCart } from "../hooks/useCart";
import { useEffect, useState } from "react";
import { formatPrice } from "../utils/formatPrice";
import toast from "react-hot-toast";
import Heading from "../components/Heading";
import Button from "../components/Button";

interface CheckoutFromProps {
  clientSecret: string;
  handleSetPaymentSuccess: (value: boolean) => void;
}
const CheckoutForm: React.FC<CheckoutFromProps> = ({
  clientSecret,
  handleSetPaymentSuccess,
}) => {
  const { cartTotalAmount, handleClearCart, handleSetPaymentIntent } =
    useCart();
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const formattedPrise = formatPrice(cartTotalAmount);

  useEffect(() => {
    if (!stripe) {
      return;
    }
    if (!clientSecret) {
      return;
    }
    handleSetPaymentSuccess(false);
  }, [stripe]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);

    stripe
      .confirmPayment({
        elements,
        redirect: "if_required",
      })
      .then((result) => {
        if (!result.error) {
          toast.success("Paiement réussi");

          handleClearCart();
          handleSetPaymentSuccess(true);
          handleSetPaymentIntent(null);
        }
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} id="payment-form">
      <div className="mb-6">
        <Heading title="Entrez vos Informations pour procéder au paiement " />
      </div>
      <h2 className="font-semibold  mb-2">Informations de paiement</h2>
      <AddressElement
        options={{
          mode: "shipping",
          allowedCountries: ["FR"],
        }}
      />
      <PaymentElement
        id="payment-element"
        options={{
          layout: "tabs",
        }}
      />
      <div className="py-4 text-center text-slate-700 text-xl font-bold">
        Total: {formattedPrise}
      </div>
      <Button
        label={isLoading ? "Traitement" : "Payer"}
        disabled={isLoading || !stripe || !elements}
        onClick={() => {}}
      />
    </form>
  );
};

export default CheckoutForm;
