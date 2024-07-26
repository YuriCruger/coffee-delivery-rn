import { createContext, useState, ReactNode, useEffect } from "react";

import {
  StorageCartProps,
  storageProductSave,
  storageProductRemove,
  storageProductGetAll,
  storageProductUpdate,
  storageRemoveAllProducts,
} from "../storage/storageCart";

export type CartContextDataProps = {
  addProductCart: (newProduct: StorageCartProps) => Promise<void>;
  updateProductQuantity: (
    productId: string,
    productSize: string,
    productQuantity: number
  ) => Promise<void>;
  removeProductCart: (productId: string, productSize: string) => Promise<void>;
  clearCart: () => Promise<void>;
  cart: StorageCartProps[];
};

type CartContextProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext<CartContextDataProps>(
  {} as CartContextDataProps
);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<StorageCartProps[]>([]);

  async function addProductCart(newProduct: StorageCartProps) {
    try {
      const storageResponse = await storageProductSave(newProduct);
      setCart(storageResponse);
    } catch (error) {
      throw error;
    }
  }

  async function updateProductQuantity(
    productId: string,
    productSize: string,
    productQuantity: number
  ) {
    try {
      const updatedCart = await storageProductUpdate(
        productId,
        productSize,
        productQuantity
      );

      setCart(updatedCart);
    } catch (error) {
      throw error;
    }
  }

  async function removeProductCart(productId: string, productSize: string) {
    const updatedCart = await storageProductRemove(productId, productSize);
    setCart(updatedCart);
  }

  async function clearCart() {
    await storageRemoveAllProducts();
    setCart([]);
  }

  useEffect(() => {
    storageProductGetAll()
      .then((products) => setCart(products))
      .catch((error) => console.log(error));
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductCart,
        removeProductCart,
        updateProductQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
