import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

import { styles } from "./mais";

import imageproto from "../../../../assets/imageproto.png";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    img: 1,
  },
];

const Stack = createNativeStackNavigator();

export default function ImgMais() {
  const { navigate } = useNavigation();

  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <View style={styles.images}>
          <View style={styles.position}>
            <Image source={imageproto} />
          </View>
          <View style={styles.position}>
            <Image source={imageproto} />
          </View>
          <View style={styles.position}>
            <Image source={imageproto} />
          </View>
          <View style={styles.position}>
            <Image source={imageproto} />
          </View>
          <View style={styles.position}>
            <Image source={imageproto} />
          </View>
          <View style={styles.position}>
            <Image source={imageproto} />
          </View>
          <View style={styles.position}>
            <Image source={imageproto} />
          </View>
          <View style={styles.position}>
            <Image source={imageproto} />
          </View>
        </View>
      )}
      showsHorizontalScrollIndicator={false}
    />
  );
}
