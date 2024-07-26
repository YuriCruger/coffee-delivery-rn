import { useState } from "react";
import * as S from "./styles";
import { PressableProps } from "react-native";

type Props = PressableProps & {
  title: string;
  color?: S.ButtonTypeStyleProps;
};

export function Button({ color = "PURPLE", title, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <S.Container
      color={color}
      isFocused={isFocused}
      onPressIn={() => setIsFocused(true)}
      onPressOut={() => setIsFocused(false)}
      {...rest}
    >
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
