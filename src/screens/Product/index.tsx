import { useEffect, useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as S from "./styles";
import * as Haptics from "expo-haptics";

import ErrorSound from "@/assets/error_sound.mp3";
import SuccessSound from "@/assets/success_sound.mp3";

import { InputNumber } from "@/components/InputNumber";
import { CartIcon } from "@/components/CartIcon";
import { Select } from "@/components/Select";
import { Button } from "@/components/Button";

import { products } from "@/data/products";

import { Product as ProductType } from "@/dto/ProductDTO";

import { useToast } from "@/hooks/useToast";
import { useCart } from "@/hooks/useCart";

import { Audio } from "expo-av";

type RouteParams = {
  id: string;
};

const PRODUCT_SIZES = {
  size_1: "114ml",
  size_2: "140ml",
  size_3: "227ml",
};

export function Product() {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState<string | null>(null);
  const [error, setError] = useState(false);

  const { addProductCart } = useCart();

  const route = useRoute();

  const { id } = route.params as RouteParams;

  const navigation = useNavigation();

  const { addToast } = useToast();

  function handleIncrease() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function handleDecrease() {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  }

  function fetchProductById() {
    const foundProduct = products.find((product) => product.id === id);

    if (foundProduct) {
      setProduct(foundProduct);
    }
  }

  async function handleAddProduct() {
    if (!size) {
      setError(true);
      const { sound } = await Audio.Sound.createAsync(ErrorSound, {
        shouldPlay: true,
      });

      await sound.setPositionAsync(0);
      await sound.playAsync();

      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);

      return;
    }

    if (product) {
      const newProduct = {
        id: product.id,
        title: product.title,
        size,
        quantity: quantity,
        price: product.price,
        image: product.image,
      };

      await addProductCart(newProduct);

      const { sound } = await Audio.Sound.createAsync(SuccessSound, {
        shouldPlay: true,
      });

      await sound.setPositionAsync(0);
      await sound.playAsync();

      addToast({
        title: product.title,
        size,
        quantity: quantity.toString(),
      });

      navigation.navigate("home");
    }
  }

  useEffect(() => {
    fetchProductById();
  }, []);

  return (
    <S.Container>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <S.FirstSectionContainer>
          <S.Header>
            <Pressable onPress={() => navigation.goBack()}>
              <S.BackButton />
            </Pressable>

            <CartIcon onPress={() => navigation.navigate("cart")} />
          </S.Header>

          <S.CategoryBadge>
            <S.CategoryTitle>{product?.category}</S.CategoryTitle>
          </S.CategoryBadge>
          <S.Group>
            <S.Title>{product?.title}</S.Title>

            <S.PriceContainer>
              <S.MoneySign>R$</S.MoneySign>
              <S.Price>{product?.price}</S.Price>
            </S.PriceContainer>
          </S.Group>

          <S.Description>{product?.description}</S.Description>

          <S.ImageGroup>
            <S.SmokeImage />
            <S.CoffeeImage />
          </S.ImageGroup>
        </S.FirstSectionContainer>

        <S.SecondSectionContainer>
          <S.OptionDescribe>Selecione o tamanho:</S.OptionDescribe>

          <S.SelectsContainer>
            {Object.values(PRODUCT_SIZES).map((product_size) => (
              <S.FieldContainer key={product_size}>
                <Select
                  size={product_size}
                  onPress={() => setSize(product_size)}
                  isSelected={size === product_size}
                  isError={!size && error}
                />
              </S.FieldContainer>
            ))}
          </S.SelectsContainer>

          <S.MultipleFieldsContainer>
            <S.InputNumberContainer>
              <InputNumber
                number={quantity.toString()}
                handleDecrease={handleDecrease}
                handleIncrease={handleIncrease}
              />
            </S.InputNumberContainer>

            <S.FieldContainer>
              <View style={{ opacity: size === null ? 0.5 : 1 }}>
                <Button title="adicionar" onPress={handleAddProduct} />
              </View>
            </S.FieldContainer>
          </S.MultipleFieldsContainer>
        </S.SecondSectionContainer>
      </ScrollView>
    </S.Container>
  );
}
