import { useState, useRef } from "react";
import {
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

import useCustomFetch from '../../services/hooks/useFetch';

import {BASE_URL} from "@env";

// const DATA = [
//   {
//     image: "camera",
//     name: "Fotógrafo",
//   },
//   {
//     image: "cpu",
//     name: "T.I.",
//   },
//   {
//     image: "tool",
//     name: "Mecânico",
//   },
//   {
//     image: "briefcase",
//     name: "Advogado",
//   },
//   {
//     image: "clipboard",
//     name: "Professor",
//   },
//   {
//     image: "plus",
//     name: "Enfermeiro",
//   },
// ];

export const Slider = () => {

  const {data} = useCustomFetch(BASE_URL + 'ramoatv/todos')

  console.log(data)

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
        data={data}
        renderItem={({ item }) => (
          <View
            style={{
              width: vw(Dimensions.get("screen").width * 0.06),
              alignItems: "center",
              height: vw(15),
              marginHorizontal: vw(2),
            }}
          >
            <TouchableOpacity>
              <Feather
                name={item.iconramo}
                size={35}
                color="#10228A"
                style={{ alignSelf: "center" }}
              />
              <Text
                style={{ fontFamily: "IRegular", alignSelf: "center" }}
              >
                {item.ramo}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        horizontal
        keyExtractor={(index) => String(index)}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
