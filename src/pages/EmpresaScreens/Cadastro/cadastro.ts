import { color } from "@rneui/base";
import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontFamily: 'ISemi',
    marginBottom: 20,
  },
  text: {
    fontFamily: "IRegular",
    fontSize: 18
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  botao:{
    justifyContent: "center",
    alignItems: "center",
    borderRadius: vw(4),
    height: vw(10),
    width: vw(36),
    backgroundColor: "#1429A6",
  },
  botaoText:{
    fontFamily: "ISemi",
    color: "white",
    fontSize: vw(4),
  },
  barra:{
    position: 'absolute',
    maxWidth: '100%',
  },
  progressContainer: {
    marginBottom: 20,
  },
  progress: {
    height: 7,
    borderRadius: 4,
    width: '100%',
    backgroundColor: '#BBB6B6',
  },
  progressInner: {
    height: '100%',
    borderRadius: 4,
    backgroundColor: '#1429A6',
  },
  inputError: {
    borderColor: 'red',
  },
  cpfcnpj: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    height: 60,
    justifyContent: "center"
  },
  cpfcnpj2: {
    fontFamily: "ISemi",
    fontSize: vw(4.5),
    color: "#c0c0c0"
  }


//           exp://10.68.21.126:8081
});
