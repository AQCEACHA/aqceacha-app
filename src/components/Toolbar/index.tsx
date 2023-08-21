import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

import { NavigationContainer } from "@react-navigation/native";
import DrawerRoutes from "./drawer.routes";

export default function Toolbar() {
  return (
    <NavigationContainer>
        <DrawerRoutes></DrawerRoutes>
    </NavigationContainer>
  );
}
/*
const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
    height: vw(13),
    shadowColor: "#000",
    shadowOffset: {
      width: vw(0),
      height: vw(4),
    },
    shadowOpacity: vw(0.3),
    shadowRadius: vw(4.65),

    elevation: vw(2),
  },
  icontoolbar: {
    marginRight: vw(5),
    marginLeft: vw(5),
  },
});*/
