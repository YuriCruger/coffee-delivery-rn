import { Icon } from "../Icon";
import * as S from "./styles";

type Props = {
  number: string;
  handleDecrease: () => void;
  handleIncrease: () => void;
};

export function InputNumber({ number, handleDecrease, handleIncrease }: Props) {
  return (
    <S.Container>
      <Icon onPress={handleDecrease} type="MINUS" />
      <S.Number>{number}</S.Number>
      <Icon onPress={handleIncrease} type="PLUS" />
    </S.Container>
  );
}
