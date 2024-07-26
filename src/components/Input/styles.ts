import { MagnifyingGlass } from "phosphor-react-native";
import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.GRAY_200};
  width: 100%;
  padding: 12px;
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.View`
  padding-right: 12px;
`;

type Props = {
  isFocused: boolean;
};

export const MagnifyingGlassIcon = styled(MagnifyingGlass).attrs<Props>(
  ({ theme, isFocused }) => ({
    color: isFocused ? theme.colors.YELLOW : theme.colors.GRAY_400,
  })
)``;

export const TextInputStyled = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.GRAY_400,
  selectionColor: theme.colors.WHITE,
  keyboardType: "visible-password",
}))`
  ${({ theme }) => css`
    color: ${theme.colors.GRAY_700};
    font-size: ${theme.fonts.ROBOTO_TEXT_SM.size}px;
    font-family: ${theme.font_family.ROBOTO_REGULAR};
    line-height: ${theme.fonts.ROBOTO_TEXT_SM.lineHeight *
    theme.fonts.ROBOTO_TEXT_SM.size}px;
    flex: 1;
  `}
`;
