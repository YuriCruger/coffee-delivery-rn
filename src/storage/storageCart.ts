import AsyncStorage from "@react-native-async-storage/async-storage";
import { ImageSourcePropType } from "react-native";

const CART_STORAGE = "@COFFEE_DELIVERY_CART";

export type StorageCartProps = {
  id: string;
  title: string;
  size: string;
  quantity: number;
  price: number;
  image: ImageSourcePropType;
};

export async function storageProductGetAll() {
  try {
    const storage = await AsyncStorage.getItem(CART_STORAGE);
    const products: StorageCartProps[] = storage ? JSON.parse(storage) : [];

    return products;
  } catch (error) {
    throw error;
  }
}

export async function storageProductSave(newProduct: StorageCartProps) {
  try {
    let products = await storageProductGetAll();

    const productExists = products.find(
      (product) =>
        product.id === newProduct.id && product.size === newProduct.size
    );

    if (productExists) {
      products = products.map((product) => {
        if (product.id === newProduct.id && product.size === newProduct.size) {
          product.quantity =
            Number(product.quantity) + Number(newProduct.quantity);
        }
        return product;
      });
    } else {
      products.push(newProduct);
    }

    const productsUpdated = JSON.stringify(products);
    await AsyncStorage.setItem(CART_STORAGE, productsUpdated);

    return products;
  } catch (error) {
    throw error;
  }
}

export async function storageProductUpdate(
  productId: string,
  size: string,
  quantity: number
) {
  try {
    let products = await storageProductGetAll();

    products = products.map((product) => {
      if (product.id === productId && product.size === size) {
        product.quantity = quantity;
      }
      return product;
    });

    await AsyncStorage.setItem(CART_STORAGE, JSON.stringify(products));

    return products;
  } catch (error) {
    throw error;
  }
}

export async function storageProductRemove(productId: string, size: string) {
  try {
    const products = await storageProductGetAll();

    const productsUpdated = products.filter(
      (product) => !(product.id === productId && product.size === size)
    );
    await AsyncStorage.setItem(CART_STORAGE, JSON.stringify(productsUpdated));

    return productsUpdated;
  } catch (error) {
    throw error;
  }
}

export async function storageRemoveAllProducts() {
  try {
    await AsyncStorage.removeItem(CART_STORAGE);
  } catch (error) {
    throw error;
  }
}
