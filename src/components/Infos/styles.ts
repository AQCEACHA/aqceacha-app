import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
        
      },
      modalView: {
        backgroundColor: "white",
        borderRadius: 30,
        paddingTop: 25,
        paddingBottom: 25,
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
        marginHorizontal: 40
      },
      topo: {
        flexDirection: "row",
        paddingBottom: 20,
        justifyContent: 'center'
      },
      modalText: {
        alignSelf: "center",
        fontSize: 20,
        fontFamily: 'Inter_600SemiBold',
      },
      conteudo: {
        marginTop: 16,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
      },
      text: {
        fontFamily: "Inter_400Regular",
        marginBottom: 6,
        marginTop: 6,
        fontSize: 15,
        alignSelf: 'center'
      },
      modalimg: {
        height: 98,
        width: 150,
        alignSelf: 'center'
      },
      info: {
        borderColor: "#BBB6B6",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        marginRight: 40
      },
});