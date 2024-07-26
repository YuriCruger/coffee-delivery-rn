import { useNavigation } from "@react-navigation/native";
import Animated, {
  LinearTransition,
  SlideInLeft,
} from "react-native-reanimated";
import * as S from "./styles";

import { Button } from "@/components/Button";

export function OrderConfirmed() {
  const { navigate } = useNavigation();
  return (
    <S.Container>
      <Animated.View
        entering={SlideInLeft.duration(1000)}
        layout={LinearTransition.springify()}
      >
        <S.ImageStyled />
      </Animated.View>
      <S.Title>Uhu! Pedido confirmado</S.Title>

      <S.Description>
        Agora é só aguardar que logo o café chegará até você!
      </S.Description>

      <S.ButtonContainer>
        <Button title="ir para a home" onPress={() => navigate("home")} />
      </S.ButtonContainer>
    </S.Container>
  );
}
