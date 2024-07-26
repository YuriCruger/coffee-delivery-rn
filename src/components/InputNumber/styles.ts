import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  gap: 4px;
  align-items: center;
  align-self: flex-start;
`;

export const Number = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY_100};
    font-size: ${theme.fonts.ROBOTO_TEXT_MD.size}px;
    font-family: ${theme.font_family.ROBOTO_REGULAR};
    line-height: ${theme.fonts.ROBOTO_TEXT_MD.lineHeight *
    theme.fonts.ROBOTO_TEXT_MD.size}px;
  `}
`;
