import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";


export const styles = StyleSheet.create({
      modalView: {
        backgroundColor: "white",
        shadowColor: "#FAFAFA",
        maxWidth: 340,
        height: '100%',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        
      },
      topo: {
        flexDirection: "row",
        borderBottomColor: 'black',
        paddingBottom: 20,
        borderBottomWidth: 0.5
      },
      modalText: {
        alignSelf: "center",
        fontSize: 20,
        marginLeft: 130,
        fontFamily: 'Inter_600SemiBold'
      },
      conteudo: {
        marginTop: 16,
        flexDirection: "column",
        paddingHorizontal: vw(2)
      },
      cidade:{
        height: 48,
        width: 280,
        borderRadius: 10,
        backgroundColor: '#10228A',
        flexDirection: 'row',
        marginBottom: vw(8),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
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
      text: {
        fontFamily: "Inter_400Regular",
        marginBottom: 6,
        marginTop: 6,
        fontSize: 15,
        alignSelf: 'center'
      },
      toolbar: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
    
        alignItems: "center",
        height: vw(13),
        shadowColor: "#000",
        shadowOffset: {
          width: vw(0),
          height: vw(4),
        },
        shadowOpacity: vw(0.3),
        shadowRadius: vw(4.65),
    
        elevation: vw(2),
      },
      icontoolbar: {
        marginRight: vw(5),
        marginLeft: vw(5),
      },
      modalimg: {
        height: 90,
        width: 100,
      },
      textinfo:{
        textAlign: 'left',
        flexDirection: 'column'
      },
      information:{
        marginTop: vw(4),
        marginBottom: vw(4),
        flexDirection: 'row',
        alignItems: 'center',
        
      }
});