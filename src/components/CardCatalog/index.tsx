import { PressableProps } from "react-native";
import * as S from "./styles";

type Props = PressableProps & {
  title: string;
  description: string;
  price: string;
  image: any;
};

export function CardCatalog({
  title,
  description,
  price,
  image,
  ...rest
}: Props) {
  return (
    <S.Container {...rest}>
      <S.ImageStyled imageSrc={image} />

      <S.Content>
        <S.Title>{title}</S.Title>

        <S.Description numberOfLines={2} ellipsizeMode="tail">
          {description}
        </S.Description>

        <S.PriceContainer>
          <S.MoneySign>R$</S.MoneySign>
          <S.Price>{price}</S.Price>
        </S.PriceContainer>
      </S.Content>
    </S.Container>
  );
}
