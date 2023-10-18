import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

import { styles } from "./styles";

import imageproto from "../../../assets/imageproto.png";

import test from '../../../assets/testimage.png';



import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";


const DATA = [
  {
    empresa: "Cameraman",
    image: test,
  },
  {
    empresa: "Empresa Nome",
    image: imageproto,
  },
  {
    empresa: "Empresa Nome",
    image: imageproto,
  },
    {
    empresa: "Empresa Nome",
    image: imageproto,
  },
];

const Stack = createNativeStackNavigator();


export default function Empresas() {

  const { navigate } = useNavigation();

  const numColumns = 2;

  return (
    <FlatList
      data={DATA}
      numColumns={numColumns} // Mostrar 2 itens por linha
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => {
            navigate("Vendedor");
          }}
        >
          <Image source={item.image} resizeMode="contain" style={styles.img} />
          <Text style={styles.text}>{item.empresa}</Text>
        </TouchableOpacity>
      )}
      showsHorizontalScrollIndicator={false}
    />


  );
}
