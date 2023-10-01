import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";


export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
        
      },
      modalView: {
        height: vw(60),
        width: vw(70),
        backgroundColor: "white",
        borderRadius: 30,
        paddingTop: 25,
        shadowColor: "#FAFAFA",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        zIndex: 1,
        position: 'absolute'
      },
      topo: {
        flexDirection: "row",
        borderBottomColor: 'black',
        paddingBottom: 26,
      },
      modalText: {
        marginLeft: vw(6),
        alignSelf: "center",
        fontSize: 20,
        fontFamily: 'Inter_600SemiBold'
      },
      conteudo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center'
      },
      itens:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: vw(5),
      },
      textitens:{
        fontFamily: 'Inter_600SemiBold',
        color: '#525252',
        fontSize: vw(4),
      },
      icontoolbar: {
        marginRight: vw(5),
        marginLeft: vw(5),
      },
      input: {
        height: 40,
        width: 200,
        margin: 12,
        padding: 10,
        borderBottomWidth: 1,  
    },
    confirmar: {
        backgroundColor: '#1429A6',
        borderRadius: 30,
        alignItems: 'center',
        padding: 8,
        marginHorizontal: vw(8),
        marginTop: 26
    }
});