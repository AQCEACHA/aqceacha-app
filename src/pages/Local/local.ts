import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export const styles = StyleSheet.create({
search: {
    flexDirection: "row",
    marginTop: vw(8),
    marginBottom: vw(8),
    backgroundColor: "white",
    alignSelf: "center",
    height: vw(10),
    width: vw(80),
    borderRadius: vw(25),
  },
  iconsearch: {
    marginLeft: vw(4),
    marginRight: vw(6),
    alignSelf: "center",
  },
  searchtext: {
    fontFamily: "IRegular",
    width: vw(66),
  },
});
