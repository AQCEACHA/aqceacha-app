import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: "flex-end",
      },
      modalView: {
        backgroundColor: "white",
        borderRadius: 30,
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
      heart: {
        backgroundColor: "#1429A6",
        padding: 15,
        borderRadius: 50,
      },
      modalimg: {
        height: 98,
        width: 150,
        alignSelf: 'center'
      },
});