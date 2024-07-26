import { ShoppingCart } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.Pressable`
  height: 36px;
  width: 36px;
  padding: 8px;
  border-radius: 6px;
  position: relative;
`;

type Props = {
  isEmpty: boolean;
};

export const CartIconStyles = styled(ShoppingCart).attrs<Props>(
  ({ theme, isEmpty }) => ({
    color: isEmpty ? theme.colors.YELLOW_DARK : theme.colors.PURPLE,
    size: 20,
    weight: "fill",
  })
)``;

export const CartBadgeContainer = styled.View`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.PURPLE};
  align-items: center;
  justify-content: center;
  position: absolute;
  right: -10px;
  top: -10px;
`;

export const CartBadgeText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.WHITE};
    font-family: ${theme.font_family.ROBOTO_REGULAR};
    font-size: ${theme.fonts.ROBOTO_TEXT_XS.size}px;
    line-height: ${theme.fonts.ROBOTO_TEXT_XS.lineHeight *
    theme.fonts.ROBOTO_TEXT_XS.size}px;
  `}
`;
