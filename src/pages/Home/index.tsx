import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
export default function Home() {
  return (
    <View>
      <View style={styles.toolbar}>
        <TouchableOpacity>
          <Feather name="menu" size={30} color="#10228A" style={styles.icontoolbar} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Feather name="bell" size={30} color="#BBB6B6" style={styles.icontoolbar}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'stretch',
    alignItems: 'center',
    height: 56,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 4,
  },
  icontoolbar:{
    marginRight: 15,
    marginLeft: 15
  }
});
