import { Pressable } from "react-native";
import Animated from "react-native-reanimated";
import styled, { css } from "styled-components/native";

const PressableAnimated = Animated.createAnimatedComponent(Pressable);

type Props = {
  isSelected?: boolean;
};

export const Container = styled(PressableAnimated)`
  height: 40px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.GRAY_700};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Animated.Text)<Props>`
  ${({ theme, isSelected }) => css`
    font-family: ${isSelected
      ? theme.font_family.ROBOTO_BOLD
      : theme.font_family.ROBOTO_REGULAR};
    font-size: ${theme.fonts.ROBOTO_TEXT_SM.size}px;
    line-height: ${theme.fonts.ROBOTO_TEXT_SM.lineHeight *
    theme.fonts.ROBOTO_TEXT_SM.size}px;
  `}
`;
