import { PressableProps } from "react-native";
import * as S from "./styles";
import {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = PressableProps & {
  category: string;
  title: string;
  description: string;
  price: string;
  image: any;
  scrollX: SharedValue<number>;
  index: number;
};

const CARD_SIZE = 208;

export function FeaturedCard({
  category,
  title,
  description,
  price,
  image,
  scrollX,
  index,
  ...rest
}: Props) {
  const range = [
    (index - 1) * CARD_SIZE,
    index * CARD_SIZE,
    (index + 1) * CARD_SIZE,
  ];

  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      range,
      [0.85, 1, 0.85],
      Extrapolate.CLAMP
    );

    return { transform: [{ scale: scale }] };
  }, [scrollX.value]);

  return (
    <S.Container style={[animatedStyles]} {...rest}>
      <S.ImageStyled imageSrc={image} />

      <S.BadgeContainer>
        <S.BadgeCategory>{category}</S.BadgeCategory>
      </S.BadgeContainer>

      <S.TitleAndDescriptionGroup>
        <S.Title numberOfLines={2} ellipsizeMode="tail">
          {title}
        </S.Title>

        <S.Description numberOfLines={2} ellipsizeMode="tail">
          {description}
        </S.Description>
      </S.TitleAndDescriptionGroup>

      <S.PriceContainer>
        <S.MoneySign>R$</S.MoneySign>
        <S.Price>{price}</S.Price>
      </S.PriceContainer>
    </S.Container>
  );
}
