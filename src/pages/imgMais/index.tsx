import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

import { styles } from "./imgmais";

import imageproto from "../../../assets/imageproto.png";

import pic1 from '../../../assets/teste/pic1.png';
import pic2 from '../../../assets/teste/pic2.png';
import pic3 from '../../../assets/teste/pic3.png';
import pic4 from '../../../assets/teste/pic4.png';



import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";
import { useFetch } from '../../services/hooks/useFetch';
import { BASE_URL } from "@env";


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


export default function ImgMais({route}:any) {
  const { idven } = route.params;

  const { data } = useFetch(BASE_URL + `/vendedor/${idven}`);
  const { navigate } = useNavigation();

  const numColumns = 2;

  return data && (
    <FlatList
      data={data.imagens}
      numColumns={numColumns} // Mostrar 2 itens por linha
      renderItem={({ item }) => (
        <View
          style={styles.itemContainer}
        >
          <Image source={{uri:item.img}} style={styles.img} />
        </View>
      )}
      showsHorizontalScrollIndicator={false}
    />


  );
}
