import { useState, useEffect, useRef } from 'react';
import { View, FlatList, Image, Dimensions } from 'react-native';
import Feather from "@expo/vector-icons/Feather";
import Animated, {
  Layout,
  FadeInLeft,
  FadeOutRight,
} from 'react-native-reanimated';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const DATA = [
  {
    image: 'camera'

  },
  {
    image:
      'cpu',
  },
  {
    image:
      'tool',
  },
  {
    image: 'briefcase'

  },
  {
    image:
      'clipboard',
  },
  {
    image:
      'plus',
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

  /*useEffect(() => {
    if (activeBanner === DATA.length - 1) {
      return;
    }
    const timeId = setTimeout(() => {
      FlatlistRef.current?.scrollToIndex({
        index: activeBanner + 1,
        animated: true,
      });
      setActiveBanner((old) => old + 1);
    }, 3000);
    return () => clearTimeout(timeId);
  }, [activeBanner]);
  */

  return (
    <View style={{ alignItems: 'center' }}>
      <FlatList
        ref={FlatlistRef}
        data={DATA}
        renderItem={({ item, index }) => (
          <View
            style={{
              width: vw(Dimensions.get('screen').width * 0.035),
              alignItems: 'center',
              height: vw(35),
              marginHorizontal: vw(10),
            }}
          >
            <Feather
              name={item.image}
              size={35}
              color="#10228A"
            />
          </View>
        )}
        pagingEnabled
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        horizontal
        keyExtractor={(item, index) => String(index)}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
