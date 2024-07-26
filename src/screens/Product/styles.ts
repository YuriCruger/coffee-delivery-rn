import { Image } from "react-native";
import styled, { css } from "styled-components/native";

import { ArrowLeft } from "phosphor-react-native";

import SmokeImg from "@/assets/smokes/smoke.png";
import CoffeeImg from "@/assets/coffee.png";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_100};
  padding-top: 44px;
  z-index: 1;
`;

export const FirstSectionContainer = styled.View`
  flex: 1;
  padding-left: 32px;
  padding-right: 32px;
  z-index: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 76px;
`;

export const BackButton = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.WHITE,
}))``;

export const CategoryBadge = styled.View`
  padding: 6px 12px;
  background-color: ${({ theme }) => theme.colors.GRAY_200};
  border-radius: 100px;
  align-self: flex-start;
  margin-bottom: 12px;
`;

export const CategoryTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.WHITE};
    font-size: ${theme.fonts.ROBOTO_TAG.size}px;
    font-family: ${theme.font_family.ROBOTO_BOLD};
    line-height: ${theme.fonts.ROBOTO_TAG.lineHeight *
    theme.fonts.ROBOTO_TAG.size}px;
  `}
  text-transform: uppercase;
`;

export const Group = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.WHITE};
    font-size: ${theme.fonts.BALOO_2_LG.size}px;
    font-family: ${theme.font_family.BALOO_2};
    line-height: ${theme.fonts.BALOO_2_LG.lineHeight *
    theme.fonts.BALOO_2_LG.size}px;
  `}
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  gap: 4px;
  align-items: baseline;
`;

export const MoneySign = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.YELLOW};
    font-size: ${theme.fonts.ROBOTO_TEXT_SM.size}px;
    font-family: ${theme.font_family.ROBOTO_REGULAR};
    line-height: ${theme.fonts.ROBOTO_TEXT_SM.lineHeight *
    theme.fonts.ROBOTO_TEXT_SM.size}px;
  `}
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.YELLOW};
    font-size: ${theme.fonts.ROBOTO_TEXT_XL.size}px;
    font-family: ${theme.font_family.ROBOTO_BOLD};
    line-height: ${theme.fonts.ROBOTO_TEXT_XL.lineHeight *
    theme.fonts.ROBOTO_TEXT_XL.size}px;
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY_500};
    font-size: ${theme.fonts.ROBOTO_TEXT_MD.size}px;
    font-family: ${theme.font_family.ROBOTO_REGULAR};
    line-height: ${theme.fonts.ROBOTO_TEXT_MD.lineHeight *
    theme.fonts.ROBOTO_TEXT_MD.size}px;
  `}
`;

export const ImageGroup = styled.View`
  align-items: center;
  margin-top: auto;
`;

export const SmokeImage = styled(Image).attrs(() => ({
  source: SmokeImg,
}))`
  width: 64px;
  height: 137px;
  margin-bottom: -60px;
`;

export const CoffeeImage = styled(Image).attrs(() => ({
  source: CoffeeImg,
}))`
  width: 295px;
  height: 260px;
  margin-bottom: -50px;
`;

export const SecondSectionContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.GRAY_900};
  padding: 44px 32px 32px 32px;
  margin-top: auto;
`;

export const OptionDescribe = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY_400};
    font-size: ${theme.fonts.ROBOTO_TEXT_SM.size}px;
    font-family: ${theme.font_family.ROBOTO_REGULAR};
    line-height: ${theme.fonts.ROBOTO_TEXT_SM.lineHeight *
    theme.fonts.ROBOTO_TEXT_SM.size}px;
  `}
`;

export const SelectsContainer = styled.View`
  flex-direction: row;
  gap: 8px;
  margin-top: 8px;
`;

export const FieldContainer = styled.View`
  flex: 1;
`;

export const MultipleFieldsContainer = styled.View`
  flex-direction: row;
  gap: 16px;
  margin-top: 16px;
  background-color: ${({ theme }) => theme.colors.GRAY_700};
  border-radius: 6px;
`;

export const InputNumberContainer = styled.View`
  margin-top: auto;
  margin-bottom: auto;
`;
