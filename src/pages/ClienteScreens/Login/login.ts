import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";


export const styles = StyleSheet.create({
    topoImg:{
        height: vw(20),
        width: vw(80),
        alignSelf: 'center',
        marginTop: vw(12)
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
      },
      login:{
        marginHorizontal: vw(6),
        marginTop: vw(12)
      },
      check:{
        flexDirection: 'row',
        alignItems: 'center'
      },
      entrar:{
        alignItems: 'center',
      },
      botao:{
        justifyContent: "center",
        alignItems: "center",
        borderRadius: vw(4),
        height: vw(12),
        width: vw(40),
        backgroundColor: "#1429A6",
        marginTop: vw(22),
      },
    botaoText:{
        fontFamily: "ISemi",
        color: "white",
        fontSize: vw(4),
      },
      esqueceu:{
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: vw(28)
      }
})