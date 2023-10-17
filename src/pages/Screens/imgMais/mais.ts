import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";


export const styles = StyleSheet.create({
  images: {
    marginTop: vw(4),
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  position: {
    marginTop: vw(4),
    marginBottom: vw(4),
  },
});
