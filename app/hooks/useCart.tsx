'use client'
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { CartProductType } from "@/app/product/[id]/ProductDetails";
import { toast } from "react-hot-toast";

type CartContextType = {
  cartTotalQty: number;
  cartTotalAmount: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
  handleRemoveProductFromCart: (product: CartProductType) => void;
  handleCartQtyIncrease: (product: CartProductType) => void;
  handleCartQtyDecrease: (product: CartProductType) => void;
  handleClearCart: () => void;
  paymentIntent: string | null;
  handleSetPaymentIntent: (val: string | null) => void;
  selectedGrams: number;
  handleSetSelectedGrams: (grams: number) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider: React.FC = (props) => {
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartTotalAmount, setCartTotalAmount] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );
  const [paymentIntent, setPaymentIntent] = useState<string | null>(null);
  const [addedProduct, setAddedProduct] = useState<CartProductType | null>(
    null
  );
  const [selectedGrams, setSelectedGrams] = useState(2);
const handleSetSelectedGrams = (grams: number) => {
  setSelectedGrams(grams);
};


  useEffect(() => {
    const cartItems: any = localStorage.getItem("eShopCartItems");
    const cProducts: CartProductType[] | null = JSON.parse(cartItems);
    const eShopPaymentIntent: any = localStorage.getItem("eShopPaymentIntent");
    const paymentIntent: string | null = JSON.parse(eShopPaymentIntent);

    setCartProducts(cProducts);
    setPaymentIntent(paymentIntent);
  }, []);

useEffect(() => {
  const getTotals = () => {
    if (cartProducts) {
      const { total, qty } = cartProducts.reduce(
        (acc, item) => {
          let itemTotal;
          if (item.category === "Huiles" || item.category === "Accessoires") {
            itemTotal = item.price * item.quantity;
          } else {
            itemTotal = item.totalPrice * item.quantity;
          }
          acc.total += itemTotal;
          acc.qty += item.quantity;

          return acc;
        },
        {
          total: 0,
          qty: 0,
        }
      );
      setCartTotalQty(qty);
      setCartTotalAmount(total);
    }
  };
  getTotals();
}, [cartProducts]);

  const handleAddProductToCart = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let updatedCart;

      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }

     
      localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));

       setAddedProduct(product);
      
      return updatedCart;
    });
  }, [cartProducts]);

useEffect(() => {
  // Cette partie du code sera exécutée après chaque mise à jour de cartProducts
  if (cartProducts && addedProduct) {
    toast.success("Produit ajouté au panier");
    // Réinitialisez l'état du produit ajouté pour éviter d'afficher le toast à nouveau
    setAddedProduct(null);
  }
}, [cartProducts, addedProduct]);

 const handleRemoveProductFromCart = useCallback(
   (product: CartProductType) => {
     if (cartProducts) {
       // Trouver l'index de l'entrée du produit à supprimer
       const productIndex = cartProducts.findIndex(
         (item) => item.id === product.id
       );

       if (productIndex !== -1) {
         // Créer une copie du panier
         const updatedCart = [...cartProducts];

         // Supprimer l'entrée du produit spécifique
         updatedCart.splice(productIndex, 1);

         // Mettre à jour le panier avec la nouvelle copie
         setCartProducts(updatedCart);

         // Mettre à jour le stockage local
         localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));

         toast.success("Produit supprimé du panier");
       }
     }
   },
   [cartProducts]
 );

  const handleCartQtyIncrease = useCallback(
    (product: CartProductType) => {
      let updatedCart;
      if (product.quantity === 99) {
        return toast.error("Quantité maximum");
      }
      if (cartProducts) {
        updatedCart = [...cartProducts];
        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );

        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity = ++updatedCart[existingIndex]
            .quantity;
        }

        setCartProducts(updatedCart);
        localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  const handleCartQtyDecrease = useCallback(
    (product: CartProductType) => {
      let updatedCart;
      if (product.quantity === 1) {
        return toast.error("Quantité minimum");
      }
      if (cartProducts) {
        updatedCart = [...cartProducts];
        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );

        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity = --updatedCart[existingIndex]
            .quantity;
        }

        setCartProducts(updatedCart);
        localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  const handleClearCart = useCallback(() => {
    setCartProducts(null);
    setCartTotalQty(0);
    localStorage.setItem("eShopCartItems", JSON.stringify(null));
  }, []);

  const handleSetPaymentIntent = useCallback(
    (val: string | null) => {
      setPaymentIntent(val);
      localStorage.setItem("eShopPaymentIntent", JSON.stringify(val));
    },
    [paymentIntent]
  );

  const value = {
    cartTotalQty,
    cartProducts,
    cartTotalAmount,
    handleAddProductToCart,
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
    handleClearCart,
    handleSetPaymentIntent,
    paymentIntent,
    selectedGrams, // Ajoutez la valeur ici
    handleSetSelectedGrams, // Ajoutez la fonction ici
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }

  return context;
};
