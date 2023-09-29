import React, { useState, useEffect } from "react";

interface GramPriceProps {
  defaultGrams: number;
}

const GramPrice: React.FC<GramPriceProps> = ({ defaultGrams }) => {
  const [grams, setGrams] = useState(defaultGrams);

  useEffect(() => {
    // Prix de base pour 2 grammes
    const basePriceFor2Grams = 8; // Prix pour 2 grammes

    // Calculer le prix total en fonction de la quantité choisie
    let totalPrice = 0;

    if (grams === 2) {
      totalPrice = basePriceFor2Grams;
    } else if (grams > 2 && grams <= 50) {
      totalPrice = basePriceFor2Grams + (grams - 2) * 2; // Prix dégressif pour les grammes supplémentaires jusqu'à 50g
    } else if (grams > 50 && grams <= 100) {
      totalPrice = basePriceFor2Grams + 48 * 2 + (grams - 50) * 1.8; // Prix dégressif pour les grammes supplémentaires entre 51g et 100g
    } else if (grams > 100) {
      totalPrice = basePriceFor2Grams + 48 * 2 + 50 * 1.8 + (grams - 100) * 1.5; // Prix dégressif pour les grammes supplémentaires au-dessus de 100g
    }

    // Calculer le prix par gramme en fonction de la quantité choisie
    let pricePerGram = 0;

    if (grams === 2) {
      pricePerGram = basePriceFor2Grams / 2; // Prix par gramme pour les 2 premiers grammes
    } else if (grams > 2 && grams <= 50) {
      pricePerGram = totalPrice / grams; // Prix par gramme dégressif jusqu'à 50g
    } else if (grams > 50 && grams <= 100) {
      pricePerGram = totalPrice / grams; // Prix par gramme dégressif entre 51g et 100g
    } else if (grams > 100) {
      pricePerGram = totalPrice / grams; // Prix par gramme dégressif au-dessus de 100g
    }

    setTotalPrice(totalPrice.toFixed(2));
    setPricePerGram(pricePerGram.toFixed(2));
  }, [grams]);

  const handleGramChange = (newGrams: number) => {
    setGrams(newGrams);
  };

  const [totalPrice, setTotalPrice] = useState("0.00");
  const [pricePerGram, setPricePerGram] = useState("0.00");

  return (
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
      <div className="flex gap-4 pt-5 ">
      <p className=" font-bold text-xl text-neutral-700 ">
        {totalPrice} €
        </p>
        <div className="flex gap-1 items-center">
         <p className=" ">
        Soit  
      </p>  
      <span className=" font-semibold text-neutral-600">
        {pricePerGram} €
      </span>
      <p>
        le gramme
      </p>
        </div>
       
    </div> 
    </div>
  );
};

export default GramPrice;