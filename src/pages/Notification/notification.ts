import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export const styles = StyleSheet.create({
  content: {
    marginTop: vw(4),
    backgroundColor: '#FFFFFF',
    marginHorizontal: vw(4),
    borderRadius: 15,
    padding: vw(4),
    flexDirection: 'row',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1
  },
  text: {
    marginLeft: vw(8),
  }
})
