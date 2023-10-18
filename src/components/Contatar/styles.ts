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
    zIndex: 1
  },
  topo: {
    flexDirection: "row",
    borderBottomColor: 'black',
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    justifyContent: 'center'
  },
  modalText: {
    alignSelf: "center",
    fontSize: 20,
    fontFamily: 'ISemi'
  },
  conteudo: {
    flexDirection: "column",
  },
  contatar: {
    backgroundColor: "#AFBEE3",
    borderRadius: 30,
    paddingHorizontal: 40,
    alignItems: 'center',
    marginLeft: 8,
    height: 40,
    justifyContent: "center",
  },
  item: {
    display: "flex",
    flexDirection: 'row',
    borderBottomColor: '#BBB6B6',
    borderBottomWidth: 1,
    paddingBottom: 8,
    paddingTop: 8
  },
  text: {
    fontFamily: 'IRegular',
    fontSize: 18,
    alignSelf: 'center',
    marginLeft: 80
  },
});
