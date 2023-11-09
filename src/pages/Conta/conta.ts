import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export const styles = StyleSheet.create({
  contentuser: {
    alignItems: "center",
    marginTop: vw(8),
    marginBottom: vw(8),
  },
  maincontent:{
    backgroundColor: 'white',
    marginHorizontal: vw(2),
    borderRadius: 10,
    paddingVertical: vw(2),
    paddingHorizontal: vw(2)
  },
  imguser: {
    width: vw(50),
    height: vw(50),
    borderRadius: 100,
  },
  edit:{
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#10228A',
    padding: 8,
    position: 'absolute',
    marginTop: 190,
    marginLeft: 240
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    padding: 10,
    borderBottomWidth: 1,
},
salvar:{
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  marginTop: vw(8),
  backgroundColor: '#1429A6',
  borderRadius: 10,
  width: vw(40),
  height: vw(10)
}
});
