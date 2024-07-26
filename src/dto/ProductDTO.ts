import { ImageSourcePropType } from "react-native";

export interface Product {
  id: string;
  image: ImageSourcePropType;
  title: string;
  description: string;
  category: string;
  price: number;
}

export enum Categories {
  Tradicional = "tradicional",
  Doce = "doce",
  Especial = "especial",
}
