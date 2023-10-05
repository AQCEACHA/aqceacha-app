import { useState, useEffect, useRef } from "react";
import { View, FlatList, Image, Dimensions } from "react-native";
import Animated, {
  Layout,
  FadeInLeft,
  FadeOutRight,
} from "react-native-reanimated";

import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

const DATA = [
  {
    image:
      "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1",
  },
  {
    image:
      "https://dimensaosete.com.br/static/70b47d9b78c88d436346b91e639b0357/a6104/zoro.webp",
  },
  {
    image: "https://sm.ign.com/ign_br/screenshot/default/blob_z8c5.jpg",
  },
];

export const Carousel = () => {
  const [activeBanner, setActiveBanner] = useState<number>(0);
  const FlatlistRef = useRef<FlatList>(null);

  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems[0] !== undefined) {
      setActiveBanner(viewableItems[0]?.index);
    }
  };

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        itemVisiblePercentThreshold: 80,
      },
      onViewableItemsChanged,
    },
  ]);

  useEffect(() => {
    if (activeBanner === DATA.length - 1) {
      return;
    }

    // assim que o time chegar no limite zera o timeout

    const timeId = setTimeout(() => {
      FlatlistRef.current?.scrollToIndex({
        index: activeBanner + 1,
        animated: true,
      });
      setActiveBanner((old) => old + 1);
    }, 5000);
    return () => clearTimeout(timeId);
  }, [activeBanner]);

  return (
    <View>
      <FlatList
        ref={FlatlistRef}
        data={DATA}
        renderItem={({ item, index }) => (
          <View
            style={{
              width: vw(Dimensions.get("screen").width * 0.2),
              height: vw(49),
              marginHorizontal: vw(10.5)
            }}
          >
            <Image
              source={{
                uri: item.image,
              }}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: vw(8),
              }}
              resizeMode="contain"
            />
          </View>
        )}
        pagingEnabled
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        horizontal
        keyExtractor={(item, index) => String(index)}
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        data={DATA}
        renderItem={({ item, index }) => (
          <Animated.View
            layout={Layout}
            entering={FadeInLeft}
            exiting={FadeOutRight}
            style={{
              width: vw(activeBanner === index ? 2 : 2),
              height: vw(2),
              borderRadius: vw(4),
              backgroundColor: activeBanner === index ? "black" : "gray",
              marginHorizontal: vw(0.5),
            }}
          />
        )}
        style={{
          alignSelf: "center",
          bottom: vw(-4),
        }}
        scrollEnabled={false}
        horizontal
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
};
