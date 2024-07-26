import { FlatList, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Swipeable } from "react-native-gesture-handler";
import { Audio } from "expo-av";

import * as S from "./styles";

import { CardCart } from "@/components/CardCart";
import { Button } from "@/components/Button";

import SuccessSound from "@/assets/success_sound.mp3";

import { useCart } from "@/hooks/useCart";

import { theme } from "@/theme";

import { Trash } from "phosphor-react-native";

export function Cart() {
  const { cart, removeProductCart, clearCart } = useCart();

  const navigation = useNavigation();

  const totalValue = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  async function handleRemoveToCart(id: string, size: string) {
    await removeProductCart(id, size);
  }

  async function handleConfirmOrder() {
    const { sound } = await Audio.Sound.createAsync(SuccessSound, {
      shouldPlay: true,
    });

    await sound.setPositionAsync(0);
    await sound.playAsync();

    navigation.navigate("orderConfirmed");

    await clearCart();
  }

  return (
    <S.Container>
      <S.Header>
        <Pressable onPress={() => navigation.goBack()}>
          <S.BackButton />
        </Pressable>

        <S.Title>Carrinho</S.Title>

        <S.EmptyView />
      </S.Header>

      {cart.length > 0 ? (
        <>
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id + item.size}
            data={cart}
            renderItem={({ item }) => (
              <Swipeable
                overshootLeft={false}
                leftThreshold={100}
                onSwipeableOpen={() => handleRemoveToCart(item.id, item.size)}
                renderRightActions={() => null}
                renderLeftActions={() => (
                  <S.RemoveButton>
                    <Trash size={28} color={theme.colors.RED_DARK} />
                  </S.RemoveButton>
                )}
              >
                <CardCart
                  id={item.id}
                  title={item.title}
                  price={item.price.toString()}
                  size={item.size}
                  product_quantity={item.quantity}
                  image={item.image}
                  handleRemoveToCart={handleRemoveToCart}
                />
              </Swipeable>
            )}
          />

          <S.Section>
            <S.GroupValue>
              <S.Label>Valor total</S.Label>

              <S.Value>R$ {totalValue.toFixed(2)}</S.Value>
            </S.GroupValue>

            <Button
              title="confirmar pedido"
              color="YELLOW"
              onPress={handleConfirmOrder}
            />
          </S.Section>
        </>
      ) : (
        <S.EmptyCartMessage>
          <S.ShoppingCartIcon />
          <S.MessageText>Seu carrinho está vazio</S.MessageText>

          <S.ButtonContainer>
            <Button
              title="Ver catálogo"
              onPress={() => navigation.navigate("home")}
            />
          </S.ButtonContainer>
        </S.EmptyCartMessage>
      )}
    </S.Container>
  );
}
