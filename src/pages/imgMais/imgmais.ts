import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";


export const styles = StyleSheet.create({
  itemContainer: {
    width: "50%", // Cada item ocupa metade da largura da tela
    alignItems: "center",
    marginTop: vw(4),
    marginBottom: vw(4),
  },
  text: {
    fontFamily: "IRegular",
    marginTop: vw(2),
    marginBottom: vw(2),
    alignSelf: "center",
  },
  img:{
    width:vw(38),
    height: vw(40),
    borderRadius: 10,
  }
});
