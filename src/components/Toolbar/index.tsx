import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';


export default function Toolbar() {
  return (
      <View style={styles.toolbar}>
        <TouchableOpacity>
          <Feather name="menu" size={30} color="#10228A" style={styles.icontoolbar} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Feather name="bell" size={30} color="#BBB6B6" style={styles.icontoolbar}/>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
    height: vw(13),
    shadowColor: "#000",
    shadowOffset: {
      width: vw(0),
      height: vw(4),
    },
    shadowOpacity: vw(0.30),
    shadowRadius: vw(4.65),

    elevation: vw(2),
  },
  icontoolbar:{
    marginRight: vw(5),
    marginLeft: vw(5)
  }
});
