import { ReactNode } from "react";
import { CartContextProvider } from "../hooks/useCart";

interface CartProviderProps {
  // Ajoutez ici d'autres propriétés attendues par CartContextProvider
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};

export default CartProvider;
