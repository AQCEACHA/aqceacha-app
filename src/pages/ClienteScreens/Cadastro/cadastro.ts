import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  botoesContainer: {
    alignSelf: 'flex-end'
  },
  botao:{
    justifyContent: "center",
    alignItems: "center",
    borderRadius: vw(4),
    height: vw(10),
    width: vw(36),
    backgroundColor: "#1429A6",
    marginBottom: vw(3),
  },
  botaoText:{
    fontFamily: "ISemi",
    color: "white",
    fontSize: vw(6),
  },
  barra:{
    maxWidth: '100%',
  },
  progress:{
    height: 7,
    borderRadius: 4,
    width: '100%',
    position: 'relative',
    borderColor: '#BBB6B6'
  },
  progress_in:{
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    borderRadius: 4,
    color: '#1429A6',
  }
//           exp://10.68.21.126:8081
});
