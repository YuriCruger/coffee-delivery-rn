import { useEffect, useState } from "react";
import * as S from "./styles";

import { InputNumber } from "../InputNumber";
import { Icon } from "../Icon";

import { useCart } from "@/hooks/useCart";
import { ImageSourcePropType } from "react-native";

type Props = {
  id: string;
  title: string;
  size: string;
  price: string;
  product_quantity: number;
  image: ImageSourcePropType;
  handleRemoveToCart: (id: string, size: string) => void;
};

export function CardCart({
  id,
  title,
  size,
  price,
  product_quantity,
  image,
  handleRemoveToCart,
}: Props) {
  const [quantity, setQuantity] = useState(product_quantity);

  const { removeProductCart, updateProductQuantity } = useCart();

  async function handleIncrease() {
    const newQuantity = quantity + 1;
    await updateProductQuantity(id, size, newQuantity);
    setQuantity(newQuantity);
  }

  async function handleDecrease() {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      await updateProductQuantity(id, size, newQuantity);
      setQuantity(newQuantity);
    }
  }

  useEffect(() => {
    setQuantity(product_quantity);
  }, [product_quantity]);

  return (
    <S.Container>
      <S.ImageStyled imageSrc={image} />

      <S.Section>
        <S.Group>
          <S.TitleAndSizeContainer>
            <S.Title>{title}</S.Title>
            <S.Size>{size}</S.Size>
          </S.TitleAndSizeContainer>

          <S.Price>R$ {price}</S.Price>
        </S.Group>

        <S.Group>
          <S.InputNumberContainer>
            <InputNumber
              number={quantity.toString()}
              handleDecrease={handleDecrease}
              handleIncrease={handleIncrease}
            />
          </S.InputNumberContainer>
          <Icon type="TRASH" onPress={() => handleRemoveToCart(id, size)} />
        </S.Group>
      </S.Section>
    </S.Container>
  );
}
