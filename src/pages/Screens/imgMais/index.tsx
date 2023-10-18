import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

import { styles } from "./mais";

import imageproto from "../../../assets/imageproto.png";

import pic1 from '../../../../assets/teste/pic1.png';
import pic2 from '../../../../assets/teste/pic2.png';
import pic3 from '../../../../assets/teste/pic3.png';
import pic4 from '../../../../assets/teste/pic4.png';



import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";


const DATA = [
  {
    image: pic1,
  },
  {
    image: pic2,
  },
  {
    image: pic3,
  },
    {
    image: pic4,
  },
];

const Stack = createNativeStackNavigator();


export default function ImgMais() {

  const { navigate } = useNavigation();

  const numColumns = 2;

  return (
    <FlatList
      data={DATA}
      numColumns={numColumns} // Mostrar 2 itens por linha
      renderItem={({ item }) => (
        <View
          style={styles.itemContainer}
        >
          <Image source={item.image} resizeMode="contain" style={styles.img} />
        </View>
      )}
      showsHorizontalScrollIndicator={false}
    />


  );
}
