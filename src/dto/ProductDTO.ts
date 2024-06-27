interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  category: "traditional" | "candy" | "special";
  price: number;
}
