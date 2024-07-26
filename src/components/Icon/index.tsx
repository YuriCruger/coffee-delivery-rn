import { PressableProps } from "react-native";
import * as S from "./styles";

type Props = PressableProps & {
  type: "PLUS" | "MINUS" | "TRASH";
};

export function Icon({ type, ...rest }: Props) {
  return (
    <S.Container isTrashIcon={type === "TRASH"} {...rest}>
      {type === "TRASH" ? (
        <S.TrashStyles />
      ) : type === "PLUS" ? (
        <S.PlusStyles />
      ) : (
        <S.MinusStyles />
      )}
    </S.Container>
  );
}
