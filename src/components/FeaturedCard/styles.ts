import { Pressable } from "react-native";
import Animated from "react-native-reanimated";
import styled, { css } from "styled-components/native";

const PressableAnimated = Animated.createAnimatedComponent(Pressable);

type Props = {
  imageSrc?: any;
};

export const Container = styled(PressableAnimated)`
  background-color: ${({ theme }) => theme.colors.GRAY_700};
  border: 1px solid ${({ theme }) => theme.colors.GRAY_700};
  border-radius: 4.8px 28.8px 4.8px 28.8px;
  align-items: center;
  width: 208px;
  height: 262px;
  padding: 96px 16px 20px 16px;
  gap: 14px;
`;

export const ImageStyled = styled(Animated.Image).attrs<Props>(
  ({ imageSrc }) => ({
    source: imageSrc,
  })
)`
  position: absolute;
  width: 120px;
  height: 120px;
  top: -52px;
`;

export const BadgeContainer = styled(Animated.View)`
  justify-content: center;
  align-items: center;
  border-radius: 80px;
  background-color: ${({ theme }) => theme.colors.PURPLE_LIGHT};
  padding: 4px 8px;
`;

export const BadgeCategory = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.PURPLE};
    font-size: ${theme.fonts.ROBOTO_TAG.size}px;
    font-family: ${theme.font_family.ROBOTO_BOLD};
    line-height: ${theme.fonts.ROBOTO_TAG.lineHeight *
    theme.fonts.ROBOTO_TAG.size}px;
  `}
  text-transform: uppercase
`;

export const TitleAndDescriptionGroup = styled.View`
  gap: 4px;
  align-items: center;
`;

export const Title = styled(Animated.Text)`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY_200};
    font-size: ${theme.fonts.BALOO_2_MD.size}px;
    font-family: ${theme.font_family.BALOO_2};
    line-height: ${theme.fonts.BALOO_2_MD.lineHeight *
    theme.fonts.BALOO_2_MD.size}px;
  `}
`;

export const Description = styled(Animated.Text)`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY_400};
    font-size: ${theme.fonts.ROBOTO_TEXT_XS.size}px;
    font-family: ${theme.font_family.ROBOTO_REGULAR};
    line-height: ${theme.fonts.ROBOTO_TEXT_XS.lineHeight *
    theme.fonts.ROBOTO_TEXT_XS.size}px;
  `}
  text-align: center;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  gap: 4px;
  align-items: baseline;
`;

export const MoneySign = styled(Animated.Text)`
  ${({ theme }) => css`
    color: ${theme.colors.YELLOW_DARK};
    font-size: ${theme.fonts.ROBOTO_TEXT_SM.size}px;
    font-family: ${theme.font_family.ROBOTO_REGULAR};
    line-height: ${theme.fonts.ROBOTO_TEXT_SM.lineHeight *
    theme.fonts.ROBOTO_TEXT_SM.size}px;
  `}
`;

export const Price = styled(Animated.Text)`
  ${({ theme }) => css`
    color: ${theme.colors.YELLOW_DARK};
    font-size: ${theme.fonts.BALOO_2_LG.size}px;
    font-family: ${theme.font_family.BALOO_2};
    line-height: ${theme.fonts.BALOO_2_LG.lineHeight *
    theme.fonts.BALOO_2_LG.size}px;
  `}
`;
