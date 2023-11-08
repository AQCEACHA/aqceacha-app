import React, {useEffect, useState} from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

import { styles } from "./styles";

import imageproto from "../../../assets/imageproto.png";

import test from '../../../assets/testimage.png';

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";

//import {getData} from '../../services/hooks';

const Stack = createNativeStackNavigator();


export default function Empresas() {

  // const {getVendedorTodos} = getData();
  // const [vendedor,setVendedor] = useState([])

  // const callGetData = async () => {
  //   const vendedorResponse = await getVendedorTodos()

  //   if(!vendedorResponse.error){
  //     setVendedor(vendedorResponse)
  //   }
  // }

  // useEffect( () => {
  //   callGetData()
  // }, [])
  // console.log(vendedor)

  const { navigate } = useNavigation();

  const numColumns = 2;

  return (
    /*
    <FlatList
      data={vendedor}
      numColumns={numColumns} // Mostrar 2 itens por linha
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => {
            navigate("Vendedor");
          }}
        >

          <Text style={styles.text}>{vendedor}</Text>
        </TouchableOpacity>
      )}
      showsHorizontalScrollIndicator={false}
    />
    */
   <Text>Oi</Text>


  );
}
