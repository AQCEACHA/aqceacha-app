import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export const styles = StyleSheet.create({
  maincontent: {
    marginHorizontal: vw(8),
  },
  contentven: {
    alignItems: "flex-start",
    marginTop: vw(8),
    marginBottom: vw(4),
    flexDirection: "row",
  },
  imgven: {
    width: vw(25),
    height: vw(25),
    borderRadius: 100,
  },
  name: {
    fontFamily: "IRegular",
    alignSelf: "center",
    marginLeft: vw(4),
    fontSize: 18
  },
  row: {
    flexDirection: "row",
  },
  desc: {
    marginTop: vw(8),
  },
  images:{
    marginTop: vw(8),
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  vermais: {
    alignSelf: "flex-end",
    marginTop: vw(1),
    marginRight: vw(2),
    fontFamily: "IRegular",
    color: '#1429A6'
  },
  servicos:{
    marginTop: vw(8),
    borderBottomColor: '#BBB6B6',
    borderBottomWidth: 0.5,
  },
  item:{
    borderTopColor: '#BBB6B6',
    borderTopWidth: 0.5,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    alignContent: 'center'
    },
    textitem:{
      alignSelf: 'center',
      marginLeft: vw(4),
    },
    imgserv: {
      height: vw(20),
      width: vw(26),
      alignSelf: 'flex-end',
      marginLeft: vw(8)
    }
});
