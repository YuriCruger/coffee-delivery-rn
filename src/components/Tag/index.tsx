import { PressableProps } from "react-native";
import { interpolateColor, useAnimatedStyle } from "react-native-reanimated";
import * as S from "./styles";
import { theme } from "@/theme";

type Props = PressableProps & {
  title: string;
  tagValue: any;
};

export function Tag({ title, tagValue, ...rest }: Props) {
  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        tagValue.value,
        [0, 1],
        [theme.colors.WHITE, theme.colors.PURPLE]
      ),
    };
  });

  const animatedTitleStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        tagValue.value,
        [0, 1],
        [theme.colors.PURPLE_DARK, theme.colors.WHITE]
      ),
    };
  });

  return (
    <S.Container style={animatedContainerStyle} {...rest}>
      <S.Title style={animatedTitleStyle}>{title}</S.Title>
    </S.Container>
  );
}
