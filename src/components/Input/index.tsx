import { Keyboard, TextInput, TextInputProps } from "react-native";
import * as S from "./styles";
import { useEffect, useRef, useState } from "react";

type Props = TextInputProps & {
  handleSearch: (currentValue: string) => void;
};

export function Input({ handleSearch, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        if (inputRef.current) {
          inputRef.current.blur();
        }
      }
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <S.Container>
      <S.IconContainer>
        <S.MagnifyingGlassIcon isFocused={isFocused} />
      </S.IconContainer>

      <S.TextInputStyled
        ref={inputRef}
        placeholder="Pesquisar"
        onChangeText={setInputValue}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        onSubmitEditing={() => handleSearch(inputValue)}
        {...rest}
      />
    </S.Container>
  );
}
