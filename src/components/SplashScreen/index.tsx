import { useEffect } from "react";
import { Dimensions, StatusBar } from "react-native";
import {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import * as S from "./styles";

import { useFonts } from "expo-font";
import { Baloo2_700Bold } from "@expo-google-fonts/baloo-2";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { theme } from "@/theme";

type Props = {
  onComplete: (status: boolean) => void;
};

const PAGE_WIDTH = Dimensions.get("window").width;
const INITIAL_X_POSITION = PAGE_WIDTH + 100;

export function SplashScreen({ onComplete }: Props) {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Baloo2_700Bold,
  });

  const containerOpacity = useSharedValue(0);
  const appNameOpacity = useSharedValue(0);
  const translateY = useSharedValue(100);
  const translateX = useSharedValue(INITIAL_X_POSITION);

  const animatedContainer = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        containerOpacity.value,
        [0, 1],
        [0, 1],
        Extrapolation.CLAMP
      ),
      transform: [
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  const animatedAppName = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        appNameOpacity.value,
        [0, 1],
        [0, 1],
        Extrapolation.CLAMP
      ),
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  useEffect(() => {
    if (fontsLoaded) {
      containerOpacity.value = withTiming(1, { duration: 1000 });
      translateY.value = withTiming(0, { duration: 1000 });
      appNameOpacity.value = withDelay(1000, withTiming(1, { duration: 1000 }));
      translateX.value = withDelay(
        1000,
        withTiming(0, { duration: 1000 }, () => {
          runOnJS(onComplete)(true);
        })
      );
    }
  }, [fontsLoaded]);

  return (
    <S.Container>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={theme.colors.GRAY_100}
        translucent
      />
      <S.LogoStyled style={animatedContainer} />
      <S.AppName style={animatedAppName} />
    </S.Container>
  );
}
