import { Image } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  imageSrc: any;
};

export const Container = styled.Pressable`
  height: 120px;
  width: 100%;
  border-radius: 6px 36px 6px 36px;
  padding: 13px 16px;
  background-color: ${({ theme }) => theme.colors.GRAY_700};
  flex-direction: row;
`;

export const ImageStyled = styled(Image).attrs<Props>(({ imageSrc }) => ({
  source: imageSrc,
}))`
  width: 96px;
  height: 96px;
  margin-top: -32px;
  margin-left: -5px;
`;

export const Content = styled.View`
  gap: 4px;
  flex: 1;
  margin-left: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY_200};
    font-size: ${theme.fonts.BALOO_2_SM.size}px;
    font-family: ${theme.font_family.BALOO_2};
    line-height: ${theme.fonts.BALOO_2_XS.lineHeight *
    theme.fonts.BALOO_2_SM.size}px;
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY_400};
    font-size: ${theme.fonts.ROBOTO_TEXT_XS.size}px;
    font-family: ${theme.font_family.ROBOTO_REGULAR};
    line-height: ${theme.fonts.ROBOTO_TEXT_XS.lineHeight *
    theme.fonts.ROBOTO_TEXT_XS.size}px;
  `}
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

export const MoneySign = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.YELLOW_DARK};
    font-size: ${theme.fonts.ROBOTO_TEXT_SM.size}px;
    font-family: ${theme.font_family.ROBOTO_REGULAR};
  `}
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.YELLOW_DARK};
    font-size: ${theme.fonts.BALOO_2_MD.size}px;
    font-family: ${theme.font_family.BALOO_2};
  `}
`;
