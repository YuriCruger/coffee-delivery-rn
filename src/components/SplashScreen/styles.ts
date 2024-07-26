import Animated from "react-native-reanimated";
import styled from "styled-components/native";

import Logo from "@/assets/logo.png";
import CoffeeDelivery from "@/assets/coffee_delivery.png";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.PURPLE};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 15px;
`;

export const LogoStyled = styled(Animated.Image).attrs(() => ({
  source: Logo,
}))`
  width: 44px;
  height: 68px;
`;

export const AppName = styled(Animated.Image).attrs(() => ({
  source: CoffeeDelivery,
}))`
  width: 96px;
  height: 72px;
`;
