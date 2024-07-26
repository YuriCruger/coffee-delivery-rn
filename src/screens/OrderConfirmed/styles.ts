import { Image } from "react-native";
import styled, { css } from "styled-components/native";

import Illustration from "@/assets/illustration.png";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.GRAY_900};
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0 32px;
`;

export const ImageStyled = styled(Image).attrs(() => ({
  source: Illustration,
}))`
  width: 270px;
  height: 161px;
  margin-bottom: 38px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.YELLOW_DARK};
    font-size: ${theme.fonts.BALOO_2_LG.size}px;
    font-family: ${theme.font_family.BALOO_2};
    line-height: ${theme.fonts.BALOO_2_LG.lineHeight *
    theme.fonts.BALOO_2_LG.size}px;
  `}
  margin-bottom: 4px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY_200};
    font-size: ${theme.fonts.ROBOTO_TEXT_SM.size}px;
    font-family: ${theme.font_family.ROBOTO_REGULAR};
    line-height: ${theme.fonts.ROBOTO_TEXT_SM.lineHeight *
    theme.fonts.ROBOTO_TEXT_SM.size}px;
  `}
  margin-bottom: 64px;
  text-align: center;
  padding: 0 32px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  padding: 0 32px;
`;
