import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { StyleSheet, View, Text } from "react-native";


export default function Slider(){
  return(
    <View style={styles.categoria}>
    <Text>Categorias</Text>
        <View style={styles.icons}>
        <Feather name="camera" size={30} color="#10228A" />
        <Feather name="cpu" size={30} color="#10228A" />
        <Feather name="tool" size={30} color="#10228A"/>
        </View>
     </View>
  );
}

const styles = StyleSheet.create({
  categoria: {


  },
  icons: {


  }
});



