import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";


export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalView: {
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 25,
    shadowColor: "#FAFAFA",
    maxHeight: 400,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1,
  },
  topo: {
    flexDirection: "row",
    borderBottomColor: "black",
    paddingBottom: 20,
    borderBottomWidth: 0.5,
  },
  modalText: {
    alignSelf: "center",
    fontSize: 20,
    marginLeft: 130,
    fontFamily: "ISemi",
  },
  conteudo: {
    width: "50%", // Cada item ocupa metade da largura da tela
    alignItems: "center",
    marginTop: vw(4),
    marginBottom: vw(4),
  },
  text: {
    fontFamily: "IRegular",
    marginBottom: 6,
    marginTop: 6,
    fontSize: 15,
  },
  heart: {
    backgroundColor: "#1429A6",
    padding: 15,
    marginTop: -25,
    borderRadius: 50,
  },
  modalimg: {
    borderRadius: 100,
    height: 98,
    width: 100,
  },
});
