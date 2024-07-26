import { Pressable } from "react-native";
import Animated from "react-native-reanimated";
import styled, { css } from "styled-components/native";

const PressableAnimated = Animated.createAnimatedComponent(Pressable);

export const Container = styled(PressableAnimated)`
  padding: 6px 12px;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.PURPLE};
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Animated.Text)`
  ${({ theme }) => css`
    font-size: ${theme.fonts.ROBOTO_TAG.size}px;
    font-family: ${theme.font_family.ROBOTO_BOLD};
    line-height: ${theme.fonts.ROBOTO_TAG.lineHeight *
    theme.fonts.ROBOTO_TAG.size}px;
  `}
  text-transform: uppercase;
`;
