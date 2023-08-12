import { StyleSheet, SafeAreaView, StatusBar, View, TextInput, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Home from "./src/components/Home";
import { Carousel } from "./src/components/Carousel";
import { Slider } from './src/components/Slider';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Home />
      <View style={styles.search}>
        <Feather name="search" size={25} color="#10228A" style={styles.iconsearch}/>
      <TextInput placeholder="O que você está procurando?">
      </TextInput>
      </View>

      <View style={styles.carousel}>
        <Carousel />
  </View>


      <Text style={styles.categorias}>Categorias</Text>

      <View style={styles.slider}>
        <Slider />
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
    flex: 1,
    alignItems: 'center',
    paddingTop: 5,
  },
    slider: {
      flex:2,
    alignItems: 'center',
    top: 40,

    /*width: 'auto',
    padding: 50,
    top: 390,
    position: 'absolute'
    */
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
  categorias: {
    fontSize: 20,
    position: 'absolute',
    alignSelf: 'center',
    top: 380
  },

});
