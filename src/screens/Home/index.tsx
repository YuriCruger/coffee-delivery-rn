import { useRef } from "react";
import { SectionList, StatusBar, ViewToken } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  SharedValue,
  useAnimatedReaction,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import * as S from "./styles";

import { FeaturedCard } from "@/components/FeaturedCard";
import { CardCatalog } from "@/components/CardCatalog";
import { CartIcon } from "@/components/CartIcon";
import { Input } from "@/components/Input";
import { Tag } from "@/components/Tag";

import { products } from "@/data/products";

import { Categories, Product } from "@/dto/ProductDTO";

import { theme } from "@/theme";

interface GroupedProducts {
  [category: string]: Product[];
}

const SectionListAnimated = Animated.createAnimatedComponent(
  SectionList as new () => SectionList<Product>
);

const groupedProducts = products.reduce((acc: GroupedProducts, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category].push(product);
  return acc;
}, {});

const sections = Object.keys(groupedProducts).map((category) => ({
  title: category,
  data: groupedProducts[category],
}));

export function Home() {
  const sectionListRef = useRef<SectionList>(null);

  const { navigate } = useNavigation();

  const scrollY = useSharedValue(0);
  const scrollX = useSharedValue(0);

  const tagValues: { [key: string]: SharedValue<number> } = {};

  Object.values(Categories).forEach((category) => {
    tagValues[category] = useSharedValue(0);
  });

  function handleSearch(currentValue: string) {
    let sectionIndex = -1;
    let itemIndex = -1;

    sections.forEach((section, sIndex) => {
      const iIndex = section.data.findIndex(
        (product) =>
          product.title.toLocaleLowerCase() === currentValue.toLocaleLowerCase()
      );
      if (iIndex !== -1) {
        sectionIndex = sIndex;
        itemIndex = iIndex;
      }
    });

    if (sectionIndex !== -1 && sectionListRef.current) {
      sectionListRef.current?.scrollToLocation({
        sectionIndex: sectionIndex,
        itemIndex: itemIndex,
        animated: true,
        viewPosition: 0.2,
      });
    }
  }

  function handleSelectCategory(category: string) {
    const index = sections.findIndex((section) => section.title === category);
    if (index !== -1 && sectionListRef.current) {
      sectionListRef.current?.scrollToLocation({
        sectionIndex: index,
        itemIndex: 0,
        animated: true,
        viewPosition: 0.2,
      });
    }
  }

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        const visibleSection = viewableItems[0].section;
        Object.keys(tagValues).forEach((category) => {
          tagValues[category].value = category === visibleSection.title ? 1 : 0;
        });
      }
    }
  );

  const scrollXHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const scrollYHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const animatedFixedHeaderStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [430, 465],
        [0, 1],
        Extrapolation.CLAMP
      ),
      transform: [
        {
          translateY: interpolate(
            scrollY.value,
            [430, 475],
            [-200, 0],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  const animatedCatalogStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [420, 445],
        [1, 0],
        Extrapolation.CLAMP
      ),
    };
  });

  const setStatusBarStyle = (
    style: "light-content" | "dark-content",
    backgroundColor: string
  ) => {
    StatusBar.setBarStyle(style);
    StatusBar.setBackgroundColor(backgroundColor);
  };

  useAnimatedReaction(
    () => scrollY.value,
    (value) => {
      if (value > 430) {
        runOnJS(setStatusBarStyle)("dark-content", theme.colors.GRAY_900);
      } else {
        runOnJS(setStatusBarStyle)("light-content", theme.colors.GRAY_100);
      }
    }
  );

  return (
    <S.Container>
      <S.FixedHeader style={animatedFixedHeaderStyles}>
        <S.Group>
          <S.Pin />
          <S.Region>Porto Alegre, RS</S.Region>

          <CartIcon onPress={() => navigate("cart")} />
        </S.Group>

        <S.Message>Nossos cafés</S.Message>

        <S.TagsContainer>
          {Object.values(Categories).map((category) => (
            <Tag
              key={category}
              onPress={() => handleSelectCategory(category)}
              title={category}
              tagValue={tagValues[category]}
            />
          ))}
        </S.TagsContainer>
      </S.FixedHeader>

      <SectionListAnimated
        ref={sectionListRef}
        onScroll={scrollYHandler}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        initialNumToRender={5}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={onViewableItemsChanged.current}
        nestedScrollEnabled
        sections={sections}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <>
            <SafeAreaView>
              <S.Header>
                <S.Group>
                  <S.Pin />
                  <S.Region>Porto Alegre, RS</S.Region>

                  <CartIcon onPress={() => navigate("cart")} />
                </S.Group>

                <S.Title>
                  Encontre o café perfeito para qualquer hora do dia
                </S.Title>

                <Input returnKeyType="search" handleSearch={handleSearch} />

                <S.ImageStyled />
              </S.Header>
            </SafeAreaView>

            <Animated.FlatList
              data={products}
              onScroll={scrollXHandler}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => {
                return (
                  <Animated.View
                    style={[
                      {
                        paddingLeft: index === 0 ? 32 : 0,
                        paddingTop: 50,
                      },
                    ]}
                  >
                    <FeaturedCard
                      onPress={() => navigate("product", { id: item.id })}
                      title={item.title}
                      description={item.description}
                      category={item.category}
                      price={item.price.toString()}
                      image={item.image}
                      index={index}
                      scrollX={scrollX}
                    />
                  </Animated.View>
                );
              }}
              horizontal
              ItemSeparatorComponent={() => <S.SeparatorComponent />}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={16}
              initialNumToRender={3}
              style={{
                marginTop: -50,
              }}
            />

            <S.FilterContainer style={animatedCatalogStyles}>
              <S.Message>Nossos cafés</S.Message>

              <S.TagsContainer>
                {Object.values(Categories).map((category) => (
                  <Tag
                    key={category}
                    onPress={() => handleSelectCategory(category)}
                    title={category}
                    tagValue={tagValues[category]}
                  />
                ))}
              </S.TagsContainer>
            </S.FilterContainer>
          </>
        )}
        renderItem={({ item }) => (
          <S.CatalogContainer>
            <CardCatalog
              onPress={() => navigate("product", { id: item.id })}
              title={item.title}
              description={item.description}
              price={item.price.toString()}
              image={item.image}
            />
          </S.CatalogContainer>
        )}
        ItemSeparatorComponent={() => <S.SeparatorComponent />}
        renderSectionHeader={({ section: { title } }) => (
          <S.SectionHeader>
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </S.SectionHeader>
        )}
      />
    </S.Container>
  );
}
