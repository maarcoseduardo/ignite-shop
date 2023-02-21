import { ReactNode, createContext, useContext, useState } from "react";

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

interface CartContextData {
  cartItems: IProduct[];
  cartTotal: number;
  addToCart: (product: IProduct) => void;
  checkIfItemAlreaddyExists: (productId: string) => boolean;
  removeCartItem: (productId: string) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  const cartTotal = cartItems.reduce((total, product) => {
    return total + product.numberPrice;
  }, 0);

  function addToCart(product: IProduct) {
    setCartItems((oldState) => [...oldState, product]);
  }

  function removeCartItem(productId: string) {
    setCartItems((oldState) =>
      oldState.filter((item) => item.id !== productId)
    );
  }

  function checkIfItemAlreaddyExists(productId: string) {
    return cartItems.some((product) => product.id === productId);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeCartItem,
        checkIfItemAlreaddyExists,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
