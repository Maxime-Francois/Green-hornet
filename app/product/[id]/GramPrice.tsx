import React, { useState, useEffect } from "react";



interface GramPriceProps {
  product: {
    name: string;
    price: number;
  };
  onGramChange: (grams: number) => void;
  onTotalPriceChange: (totalPrice: number) => void; // Ajoutez cette ligne pour la fonction de changement du prix total
  selectedGrams: number;
}

const GramPrice: React.FC<GramPriceProps> = ({
  product,
  onGramChange,
  onTotalPriceChange, // Ajoutez cette ligne pour la fonction de changement du prix total
}) => {
  const { price } = product;
  const [grams, setGrams] = useState(2);
  const [totalPrice, setTotalPrice] = useState("0.00");
  const [pricePerGram, setPricePerGram] = useState("0.00");

  useEffect(() => {
    let totalPrice = 0;

    if (grams === 2) {
      totalPrice = price;
    } else if (grams > 2 && grams <= 50) {
      totalPrice = price + (grams - 2) * 2;
    } else if (grams > 50 && grams <= 100) {
      totalPrice = price + 48 * 2 + (grams - 50) * 1.8;
    } else if (grams > 100) {
      totalPrice = price + 48 * 2 + 50 * 1.8 + (grams - 100) * 1.5;
    }

    let pricePerGram = 0;

    if (grams === 2) {
      pricePerGram = price / 2;
    } else if (grams > 2 && grams <= 50) {
      pricePerGram = totalPrice / grams;
    } else if (grams > 50 && grams <= 100) {
      pricePerGram = totalPrice / grams;
    } else if (grams > 100) {
      pricePerGram = totalPrice / grams;
    }

    setTotalPrice(totalPrice.toFixed(2));
   setPricePerGram(pricePerGram.toFixed(2));

    // Appeler la fonction de rappel pour transmettre le totalPrice au composant parent
    onTotalPriceChange(totalPrice);
  }, [grams, price, onTotalPriceChange]);

  const handleGramChange = (newGrams: number) => {
    setGrams(newGrams);
    onGramChange(newGrams);
  };

  return  (
    <div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleGramChange(2)}
          className={`${
            grams === 2 ? "bg-weedColor text-white" : "bg-gray-200"
          } px-4 py-2 rounded-md`}
        >
          2g
        </button>
        <button
          onClick={() => handleGramChange(5)}
          className={`${
            grams === 5 ? "bg-weedColor text-white" : "bg-gray-200"
          } px-4 py-2 rounded-md`}
        >
          5g
        </button>
        <button
          onClick={() => handleGramChange(10)}
          className={`${
            grams === 10 ? "bg-weedColor text-white" : "bg-gray-200"
          } px-4 py-2 rounded-md`}
        >
          10g
        </button>
        <button
          onClick={() => handleGramChange(20)}
          className={`${
            grams === 20 ? "bg-weedColor text-white" : "bg-gray-200"
          } px-4 py-2 rounded-md`}
        >
          20g
        </button>
        <button
          onClick={() => handleGramChange(50)}
          className={`${
            grams === 50 ? "bg-weedColor text-white" : "bg-gray-200"
          } px-4 py-2 rounded-md`}
        >
          50g
        </button>
        <button
          onClick={() => handleGramChange(100)}
          className={`${
            grams === 100 ? "bg-weedColor text-white" : "bg-gray-200"
          } px-4 py-2 rounded-md`}
        >
          100g
        </button>
        <button
          onClick={() => handleGramChange(200)}
          className={`${
            grams === 200 ? "bg-weedColor text-white" : "bg-gray-200"
          } px-4 py-2 rounded-md`}
        >
          200g
        </button>
      </div>
      <div className="flex gap-4 pt-5">
        <p className="font-bold text-xl text-neutral-700">{totalPrice} €</p>
        <div className="flex gap-1 items-center">
          <p className="">Soit</p>
          <span className="font-semibold text-neutral-600">
            {pricePerGram} €
          </span>
          <p>le gramme</p>
        </div>
      </div>
    </div>
  );
};

export default GramPrice;
