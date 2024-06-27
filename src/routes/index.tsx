import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Product } from "../screens/Product";
import { Cart } from "../screens/Cart";
import { OrderConfirmed } from "../screens/OrderConfirmed";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { useTheme } from "styled-components/native";

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: colors.PURPLE }}>
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="home" component={Home} />
          <Screen name="product" component={Product} />
          <Screen name="cart" component={Cart} />
          <Screen name="orderConfirmed" component={OrderConfirmed} />
        </Navigator>
      </NavigationContainer>
    </View>
  );
}
