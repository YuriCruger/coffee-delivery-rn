import { useEffect } from "react";
import { PressableProps } from "react-native";
import * as S from "./styles";

import {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { theme } from "@/theme";

type Props = PressableProps & {
  size: string;
  isSelected?: boolean;
  isError?: boolean;
};

export function Select({
  size,
  isSelected = false,
  isError = false,
  ...rest
}: Props) {
  const borderWidth = useSharedValue(0);
  const borderColor = useSharedValue("transparent");
  const textColor = useSharedValue(0);

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      borderWidth: borderWidth.value,
      borderColor: borderColor.value,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        textColor.value,
        [0, 1],
        [theme.colors.GRAY_300, theme.colors.PURPLE]
      ),
    };
  });

  useEffect(() => {
    textColor.value = withTiming(isSelected ? 1 : 0);
    borderWidth.value = withTiming(isSelected || isError ? 2 : 0, {
      duration: 500,
    });
    borderColor.value = withTiming(
      isError ? theme.colors.RED : theme.colors.PURPLE,
      { duration: 500 }
    );
  }, [isSelected, isError]);
  return (
    <S.Container style={animatedContainerStyle} {...rest}>
      <S.Title style={animatedTextStyle} isSelected={isSelected}>
        {size}
      </S.Title>
    </S.Container>
  );
}
