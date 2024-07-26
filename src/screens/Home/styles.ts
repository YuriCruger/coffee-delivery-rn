import { Image } from "react-native";
import styled, { css } from "styled-components/native";

import { MapPin } from "phosphor-react-native";

import CoffeBeans from "@/assets/coffee-beans.png";
import Animated from "react-native-reanimated";

export const Container = styled.Pressable`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_900};
`;

export const FixedHeader = styled(Animated.View)`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.GRAY_900};
  top: 0;
  padding: 16px 32px;
  width: 100%;
  z-index: 999;
  elevation: 4;
  gap: 12px;
`;

export const Header = styled.View`
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.GRAY_100};
`;

export const FilterContainer = styled(Animated.View)`
  padding: 32px 32px 0px 32px;
  gap: 12px;
`;

export const CatalogContainer = styled.View`
  padding: 0 32px 32px 32px;
`;

export const Pin = styled(MapPin).attrs(({ theme }) => ({
  color: theme.colors.PURPLE,
  weight: "fill",
}))`
  margin-right: 4px;
`;

export const Group = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Region = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY_900};
    font-size: ${theme.fonts.ROBOTO_TEXT_SM.size}px;
    font-family: ${theme.font_family.ROBOTO_REGULAR};
    line-height: ${theme.fonts.ROBOTO_TEXT_SM.lineHeight *
    theme.fonts.ROBOTO_TEXT_SM.size}px;
  `}
  flex: 1
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.WHITE};
    font-size: ${theme.fonts.BALOO_2_MD.size}px;
    font-family: ${theme.font_family.BALOO_2};
    line-height: ${theme.fonts.BALOO_2_MD.lineHeight *
    theme.fonts.BALOO_2_MD.size}px;
  `}
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const ImageStyled = styled(Image).attrs(() => ({
  source: CoffeBeans,
}))`
  height: 83px;
  width: 83px;
  margin-left: auto;
  margin-right: -32px;
`;

export const SeparatorComponent = styled.View`
  width: 32px;
  height: 32px;
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY_300};
    font-size: ${theme.fonts.BALOO_2_SM.size}px;
    font-family: ${theme.font_family.BALOO_2};
    line-height: ${theme.fonts.BALOO_2_SM.lineHeight *
    theme.fonts.BALOO_2_SM.size}px;
  `}
`;

export const TagsContainer = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const SectionHeader = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY_400};
    font-size: ${theme.fonts.BALOO_2_XS.size}px;
    font-family: ${theme.font_family.BALOO_2};
    line-height: ${theme.fonts.BALOO_2_XS.lineHeight *
    theme.fonts.BALOO_2_XS.size}px;
  `}
  padding: 32px
`;
