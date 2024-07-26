import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PURPLE" | "YELLOW";

interface Props {
  color: ButtonTypeStyleProps;
  isFocused: boolean;
}

export const Container = styled.Pressable<Props>`
  padding: 12px 8px;
  border-radius: 6px;
  background-color: ${({ theme, color, isFocused }) =>
    color === "PURPLE"
      ? isFocused
        ? theme.colors.PURPLE
        : theme.colors.PURPLE_DARK
      : isFocused
      ? theme.colors.YELLOW
      : theme.colors.YELLOW_DARK};
  min-width: 132px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  transition: 0.3s;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.WHITE};
    font-size: ${theme.fonts.ROBOTO_BUTTON.size}px;
    font-family: ${theme.font_family.ROBOTO_BOLD};
    line-height: ${theme.fonts.ROBOTO_BUTTON.lineHeight *
    theme.fonts.ROBOTO_BUTTON.size}px;
  `}
  text-transform: uppercase
`;
