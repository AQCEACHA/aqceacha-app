import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export const styles = StyleSheet.create({
  maincontent: {
    marginHorizontal: vw(8),
    marginBottom: vw(8),
  },
  contentven: {
    alignItems: 'center',
    marginTop: vw(8),
    marginBottom: vw(4),
    flexDirection: "row",
  },
  imgven: {
    width: vw(25),
    height: vw(25),
    borderRadius: 100,
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
    borderTopWidth: 0.8,
    borderTopColor: '#BBB6B6',
    flexDirection: "row",
  },
  item:{
    borderBottomWidth: 0.8,
    borderBottomColor: '#BBB6B6',
    flexDirection: 'row',
    paddingVertical: vw(3),
    },
    textitem:{
      alignSelf: 'center',
      marginLeft: vw(4),
      width: vw(40)
    },
    imgserv: {
      height: vw(20),
      width: vw(26),
      borderRadius: 10,
      marginLeft: vw(16)
    },
    img:{
      width:vw(38),
      height: vw(40),
      borderRadius: 10,
    },
    profile:{
      alignItems: 'flex-start',
      marginLeft: vw(8)
    }
});
