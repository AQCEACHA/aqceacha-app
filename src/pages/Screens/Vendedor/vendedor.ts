import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";


export const styles = StyleSheet.create({
  contentven: {
    alignItems: "flex-start",
    marginTop: vw(8),
    marginBottom: vw(4),
    flexDirection: 'row'
  },
  imgven: {
    width: vw(25),
    height: vw(25),
    borderRadius: 100,
  },
});
