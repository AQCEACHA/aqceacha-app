import { useState, useEffect, useRef } from "react";
import { View, FlatList, Image, Dimensions, Text } from "react-native";
import Animated, {
  Layout,
  FadeInLeft,
  FadeOutRight,
} from "react-native-reanimated";

import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

import crianca from '../../../assets/carousel/crianca.png';

import outubro from '../../../assets/carousel/outubro.png';

import halloween from '../../../assets/carousel/halloween.png'

const DATA = [
  {
    image: crianca,
  },
  {
    image: outubro,
  },
  {
    image: halloween,
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
    const timeId = setTimeout(() => {
      let index = activeBanner + 1;
      if (index == DATA.length) {
        index = 0
      }
      FlatlistRef.current?.scrollToIndex({
        index: index,
        animated: true,
      });
      setActiveBanner(index);
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
              height: vw(46),
              marginHorizontal: vw(10.5),
            }}
          >
            <Image
              source={item.image}
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
