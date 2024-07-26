import Animated from "react-native-reanimated";
import styled, { css } from "styled-components/native";

import { ArrowRight, ShoppingCart } from "phosphor-react-native";

export const Container = styled(Animated.View)`
  width: 100%;
  height: 96px;
  position: absolute;
  bottom: 0px;
  padding: 28px 32px 32px 32px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE};
  z-index: 999;
  gap: 20px;
  elevation: 10;
`;

export const CartIconContainer = styled.View`
  height: 36px;
  width: 36px;
  background-color: ${({ theme }) => theme.colors.GRAY_500};
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

export const BadgeCountContainer = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  right: -8px;
  top: -8px;
  background-color: ${({ theme }) => theme.colors.PURPLE};
  align-items: center;
  justify-content: center;
`;

export const BadgeCount = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.WHITE};
    font-size: ${theme.fonts.ROBOTO_TEXT_XS.size}px;
    font-family: ${theme.font_family.ROBOTO_REGULAR};
    line-height: ${theme.fonts.ROBOTO_TEXT_XS.lineHeight *
    theme.fonts.ROBOTO_TEXT_XS.size}px;
  `}
`;

export const CartIcon = styled(ShoppingCart).attrs(({ theme }) => ({
  size: 20,
  color: theme.colors.WHITE,
}))``;

export const Message = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    color: ${theme.colors.GRAY_400};
    font-size: ${theme.fonts.ROBOTO_TEXT_SM.size}px;
    font-family: ${theme.font_family.ROBOTO_REGULAR};
    line-height: ${theme.fonts.ROBOTO_TEXT_SM.lineHeight *
    theme.fonts.ROBOTO_TEXT_SM.size}px;
  `}
`;

export const MessageBold = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY_400};
    font-size: ${theme.fonts.ROBOTO_TEXT_SM.size}px;
    font-family: ${theme.font_family.ROBOTO_BOLD};
    line-height: ${theme.fonts.ROBOTO_TEXT_SM.lineHeight *
    theme.fonts.ROBOTO_TEXT_SM.size}px;
  `}
`;

export const ButtonContainer = styled.Pressable`
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.PURPLE};
    font-size: ${theme.fonts.ROBOTO_TEXT_XS.size}px;
    font-family: ${theme.font_family.ROBOTO_BOLD};
    line-height: ${theme.fonts.ROBOTO_TEXT_XS.lineHeight *
    theme.fonts.ROBOTO_TEXT_XS.size}px;
  `}
  text-transform: uppercase
`;

export const ButtonIcon = styled(ArrowRight).attrs(({ theme }) => ({
  color: theme.colors.PURPLE,
  size: 16,
}))``;
