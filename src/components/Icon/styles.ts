import styled from "styled-components/native";
import { Minus, Plus, Trash } from "phosphor-react-native";
import { Pressable } from "react-native";

type Props = {
  isTrashIcon: boolean;
};

export const Container = styled(Pressable)<Props>`
  height: 36px;
  width: 36px;
  padding: 8px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isTrashIcon }) =>
    isTrashIcon ? theme.colors.GRAY_600 : "transparent"};
`;

export const PlusStyles = styled(Plus).attrs(({ theme }) => ({
  color: theme.colors.PURPLE,
  size: 20,
  weight: "bold",
}))``;

export const MinusStyles = styled(Minus).attrs(({ theme }) => ({
  color: theme.colors.PURPLE,
  size: 20,
  weight: "bold",
}))``;

export const TrashStyles = styled(Trash).attrs(({ theme }) => ({
  color: theme.colors.PURPLE,
  size: 20,
  weight: "bold",
}))``;
