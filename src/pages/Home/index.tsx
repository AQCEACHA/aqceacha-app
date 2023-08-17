import React from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import  Toolbar  from "../../components/Toolbar";
import { Carousel } from "../../components/Carousel";
import { Slider } from "../../components/Slider";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import imageproto from "../../../assets/imageproto.png";
import negocioimage from "../../../assets/negocioimage.jpg";


export default function Home(){
  return(
    <>
    <Toolbar />

      {/*Começa scroll do home*/}
      <ScrollView>

        {/*Barra de Pesquisa*/}
        <View style={styles.search}>
          <Feather
            name="search"
            size={25}
            color="#10228A"
            style={styles.iconsearch}
          />
          <TextInput placeholder="O que você está procurando?"></TextInput>
        </View>

        {/*Carousel*/}
        <View style={styles.carousel}>
          <Carousel />
        </View>

        {/*Cateogrias*/}
        <Text style={styles.categorias}>Categorias</Text>

        <View style={styles.slider}>
          <Slider />
        </View>

        {/*Empresas*/}

        <Text style={styles.empresas}>Empresas</Text>

        <View style={styles.images}>
          <View>
            <Image source={imageproto} />
            <Text style={styles.text}>Empresa Nome</Text>
          </View>
          <View>
            <Image source={imageproto} />
            <Text style={styles.text}>Empresa Nome</Text>
          </View>
          <View>
            <Image source={imageproto} />
            <Text style={styles.text}>Empresa Nome</Text>
          </View>
          <View>
            <Image source={imageproto} />
            <Text style={styles.text}>Empresa Nome</Text>
          </View>
        </View>

        <Text style={styles.vermais}>Ver Mais...</Text>


        <Text style={styles.negociotext}>Tem seu próprio negócio?</Text>


          <Image source={negocioimage} style={styles.negocioimg} />


        <TouchableOpacity style={styles.cadastrar}>
          <Text style={{color: 'white', fontSize: vw(5)}}>Cadastrar</Text>
        </TouchableOpacity>


      </ScrollView>
      {/*Fim da scroll home*/}
      </>
  );
}

{/*Estilização*/}

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    marginTop: vw(8),
    backgroundColor: "white",
    alignSelf: "center",
    height: vw(10),
    width: vw(80),
    borderRadius: vw(25),
  },
  iconsearch: {
    marginLeft: vw(4),
    marginRight: vw(8),
    alignSelf: "center",
  },
  carousel: {
    alignSelf: 'center',
    marginTop: vw(8),
  },
  categorias: {
    marginLeft: vw(2),
    fontSize: vw(5),
    marginTop: vw(8),
  },
  slider: {
    marginTop: vw(8),
  },
  empresas: {
    marginLeft: vw(2),
    fontSize: vw(5),
    marginTop: vw(4),
  },
  images: {
    marginTop: vw(8),
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  text: {
    marginTop: vw(2),
    marginBottom: vw(2),
    alignSelf: "center",
  },
  vermais: {
    alignSelf: "flex-end",
    marginTop: vw(1),
    marginRight: vw(2),
  },
  negociotext: {
    marginLeft: vw(2),
    marginTop: vw(6),
    marginBottom: vw(3),
  },
  negocioimg:{
    height: vw(40),
    width: vw(80),
    borderRadius: vw(3),
    alignSelf: 'center',
    marginBottom: vw(3),
  },
  cadastrar: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vw(4),
    height: vw(10),
    width: vw(50),
    backgroundColor: "#1429A6",
    marginBottom: vw(3),
  },
})
