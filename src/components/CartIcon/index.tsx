import { PressableProps } from "react-native";
import * as S from "./styles";

import { useCart } from "@/hooks/useCart";

type Props = PressableProps & {};

export function CartIcon({ ...rest }: Props) {
  const { cart } = useCart();

  return (
    <S.Container {...rest}>
      <S.CartIconStyles isEmpty={cart.length <= 0} />
      {cart.length > 0 && (
        <S.CartBadgeContainer>
          <S.CartBadgeText>{cart.length}</S.CartBadgeText>
        </S.CartBadgeContainer>
      )}
    </S.Container>
  );
}
