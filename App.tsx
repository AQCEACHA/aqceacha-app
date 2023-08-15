import { StyleSheet, SafeAreaView, StatusBar, View, TextInput, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Home from "./src/components/Home";
import { Carousel } from "./src/components/Carousel";
import { Slider } from './src/components/Slider';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

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


        <Text style={styles.empresas}>Empresas</Text>

        <View style={styles.images}></View>

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
    top: vw(7),
    height: vw(100),

  },
    slider: {
    position: 'absolute',
    alignItems: 'center',
    top: vw(110),

    /*width: 'auto',
    padding: 50,
    top: 390,
    position: 'absolute'
    */
  },
  search: {
    flexDirection: 'row',
    marginTop: vw(7),
    backgroundColor: 'white',
    alignSelf: 'center',
    height: vw(10),
    width: vw(80),
    borderRadius: vw(25),
  },
  iconsearch: {
    marginLeft: vw(4),
    marginRight: vw(8),
    alignSelf: 'center'
  },
  categorias: {
    fontSize: vw(5),
    position: 'absolute',
    top: vw(95)
  },
  empresas: {
    fontSize: vw(5),
    position: 'absolute',
    flex: 4,
    top: vw(126)
  },
  images: {

  }

});
