import { useState, useRef } from "react";
import { View, FlatList, Dimensions } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

const DATA = [
  {
    image: "camera",
  },
  {
    image: "cpu",
  },
  {
    image: "tool",
  },
  {
    image: "briefcase",
  },
  {
    image: "clipboard",
  },
  {
    image: "plus",
  },
];

export const Slider = () => {
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

  return (
    <View style={{ alignItems: "center" }}>
      <FlatList
        ref={FlatlistRef}
        data={DATA}
        renderItem={({ item }) => (
          <View
            style={{
              width: vw(Dimensions.get("screen").width * 0.04),
              alignItems: "center",
              height: vw(15),
              marginHorizontal: vw(8),
            }}
          >
            <Feather name={item.image} size={35} color="#10228A" />
          </View>
        )}
        pagingEnabled
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        horizontal
        keyExtractor={(index) => String(index)}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
