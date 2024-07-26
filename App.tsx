import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { ThemeProvider } from "styled-components/native";

import { CartContextProvider } from "@/contexts/CartContext";

import { SplashScreen } from "@/components/SplashScreen";

import { Routes } from "@/routes";

import { theme } from "@/theme";

export default function App() {
  const [splashCompleted, setSplashCompleted] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <CartContextProvider>
          {splashCompleted ? (
            <Routes />
          ) : (
            <SplashScreen onComplete={setSplashCompleted} />
          )}
        </CartContextProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
