import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export const styles = StyleSheet.create({
  contentuser: {
    alignItems: "center",
    marginTop: vw(8),
    marginBottom: vw(4),
  },
  imguser: {
    width: vw(50),
    height: vw(50),
    borderRadius: 100,
  },
  contenttext: {
    alignItems: "center",
    marginBottom: vw(8),
  },
  nome: {
    fontSize: 22,
    fontFamily: "Inter_600SemiBold",
  },
  email: {
    color: "#525252",
    fontFamily: "Inter_400Regular",
  },
  contentinfo: {
    backgroundColor: "#FDFDFD",
    marginHorizontal: vw(12),
    borderRadius: 25,
    paddingBottom: vw(4),
    paddingTop: vw(8),
  },
  textinfo: {
    marginLeft: vw(4),
  },
  tema: {
    fontSize: 20,
    fontFamily: "Inter_600SemiBold",
    marginRight: 140,
  },
  conta: {
    fontSize: 20,
    fontFamily: "Inter_600SemiBold",
    marginEnd: 150,
  },
  itens: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: vw(5),
  },
  iconconfig: {
    marginRight: vw(2),
  },
  sairconta: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
    marginTop: 250,
    marginRight: 270
     
  },
});
