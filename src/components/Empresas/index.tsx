import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

import { styles } from "./styles";

import imageproto from "../../../assets/imageproto.png";



import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";


const DATA = [
  {
    empresa: "Empresa Nome",
  },
];

const Stack = createNativeStackNavigator();


export default function Empresas() {

  const { navigate } = useNavigation();

  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <View style={styles.images}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigate("Vendedor");
            }}
          >
            <Image source={imageproto} />
          </TouchableOpacity>
          <Text style={styles.text}>{item.empresa}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigate("Vendedor");
            }}
          >
            <Image source={imageproto} />
          </TouchableOpacity>
          <Text style={styles.text}>{item.empresa}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigate("Vendedor");
            }}
          >
            <Image source={imageproto} />
          </TouchableOpacity>
          <Text style={styles.text}>{item.empresa}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigate("Vendedor");
            }}
          >
            <Image source={imageproto} />
          </TouchableOpacity>
          <Text style={styles.text}>{item.empresa}</Text>
        </View>

      </View>

      )}
      showsHorizontalScrollIndicator={false}
    />


  );
}
