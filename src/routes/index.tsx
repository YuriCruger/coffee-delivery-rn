import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useTheme } from "styled-components/native";

import { OrderConfirmed } from "../screens/OrderConfirmed";
import { Product } from "../screens/Product";
import { Home } from "../screens/Home";
import { Cart } from "../screens/Cart";

import { ToastProvider } from "@/contexts/ToastContext";

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: colors.GRAY_900 }}>
      <NavigationContainer>
        <ToastProvider>
          <Navigator
            screenOptions={{
              headerShown: false,
              animation: "fade_from_bottom",
            }}
          >
            <Screen name="home" component={Home} />
            <Screen
              name="product"
              component={Product}
              options={{
                statusBarStyle: "light",
                statusBarTranslucent: true,
                statusBarColor: "transparent",
              }}
            />
            <Screen
              name="cart"
              component={Cart}
              options={{
                statusBarStyle: "dark",
                statusBarTranslucent: true,
                statusBarColor: "transparent",
              }}
            />
            <Screen
              name="orderConfirmed"
              component={OrderConfirmed}
              options={{
                statusBarStyle: "dark",
                statusBarTranslucent: true,
                statusBarColor: "transparent",
              }}
            />
          </Navigator>
        </ToastProvider>
      </NavigationContainer>
    </View>
  );
}
