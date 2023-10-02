import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import user from "../../../../assets/userimg.jpg";

import { styles } from "./vendedor";

import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Vendedor(){
  return(
    <>
    <View style={styles.contentven}>
    <Image source={user} style={styles.imgven} />
    <Text style={{fontFamily: 'Inter_400Regular'}}>Vitor Lopes Nunes</Text>
  </View>
  </>
  );
}
