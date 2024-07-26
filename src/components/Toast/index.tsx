import React, { useEffect, SetStateAction } from "react";
import {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import * as S from "./styles";

import { ToastProductProps } from "@/contexts/ToastContext";
import { useNavigation } from "@react-navigation/native";
import { useToast } from "@/hooks/useToast";

type Props = {
  title: string;
  quantity: string;
  size: string;
  showToast: boolean;
  setShowToast: React.Dispatch<SetStateAction<ToastProductProps | null>>;
};

export const Toast = ({
  title,
  quantity,
  size,
  showToast,
  setShowToast,
}: Props) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(100);

  const { navigate } = useNavigation();

  function handleNavigateFromCart() {
    setShowToast(null);
    navigate("cart");
  }

  function hideToast() {
    setShowToast(null);
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(opacity.value, [0, 1], [0, 1], Extrapolation.CLAMP),
      transform: [
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  useEffect(() => {
    if (showToast) {
      opacity.value = withTiming(1, { duration: 300 });
      translateY.value = withTiming(0, { duration: 300 });

      const hideTimeout = setTimeout(() => {
        opacity.value = withTiming(0, { duration: 300 });
        translateY.value = withTiming(100, { duration: 300 }, () => {
          runOnJS(hideToast)();
        });
      }, 5000);

      return () => clearTimeout(hideTimeout);
    }
  }, [showToast]);

  return (
    <S.Container style={animatedStyle}>
      <S.CartIconContainer>
        <S.BadgeCountContainer>
          <S.BadgeCount>{quantity}</S.BadgeCount>
        </S.BadgeCountContainer>
        <S.CartIcon />
      </S.CartIconContainer>

      <S.Message>
        {quantity} {quantity === "1" ? "café" : "cafés"}{" "}
        <S.MessageBold>{title}</S.MessageBold> de{" "}
        <S.MessageBold>{size}</S.MessageBold> adicionado ao carrinho
      </S.Message>

      <S.ButtonContainer onPress={handleNavigateFromCart}>
        <S.ButtonText>Ver</S.ButtonText>
        <S.ButtonIcon />
      </S.ButtonContainer>
    </S.Container>
  );
};
