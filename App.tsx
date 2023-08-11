import { StyleSheet, SafeAreaView, StatusBar, View, TextInput, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Home from "./src/pages/Home";
import { Carousel } from "./src/pages/Carousel";
import { BounceOutLeft } from "react-native-reanimated";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Home />
      <View style={styles.search}>
        <Feather name="search" size={25} color="#10228A" style={styles.iconsearch}/>
      <TextInput placeholder="O que você está procurando?" style={styles.textinput}>
      </TextInput>
      </View>

      <View style={styles.carousel}>
        <Carousel />
      </View>

      <View style={styles.cat}>
        <Text>Categorias</Text>
        <View style={styles.icons}>
        <Feather name="camera" size={25} color="#10228A" /> <Text>Fotógrafo</Text>
        <Feather name="cpu" size={25} color="#10228A" /> <Text>T.I</Text>
        <Feather name="tool" size={25} color="#10228A"/> <Text>Mecânico</Text>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
  },
  carousel: {
    alignItems: 'center',
    paddingTop: 5,
  },
  search: {
    flexDirection: 'row',
    marginTop: 24,
    marginBottom: 20,
    backgroundColor: 'white',
    alignSelf: 'center',
    height: 40,
    width: 312,
    borderRadius: 25,
  },
  iconsearch: {
    marginLeft: 12,
    marginRight: 15,
    alignSelf: 'center'
  },
  textinput: {
    alignSelf: 'center'
  },
  cat: {
    
    
  },
  icons: {
   flexDirection: 'row',

  },
});
