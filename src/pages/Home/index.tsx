import React from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Toolbar from "../../components/Toolbar";
import { Carousel } from "../../components/Carousel";
import { Slider } from "../../components/Slider";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import imageproto from "../../../assets/imageproto.png";
import negocioimage from "../../../assets/negocioimage.jpg";

import { styles } from "./styles";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

export default function Home() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_500Medium,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
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
          <TextInput
            placeholder="O que você está procurando?"
            style={styles.searchtext}
          ></TextInput>
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
            <TouchableOpacity>
              <Image source={imageproto} />
            </TouchableOpacity>
            <Text style={styles.text}>Empresa Nome</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Image source={imageproto} />
            </TouchableOpacity>
            <Text style={styles.text}>Empresa Nome</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Image source={imageproto} />
            </TouchableOpacity>
            <Text style={styles.text}>Empresa Nome</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Image source={imageproto} />
            </TouchableOpacity>
            <Text style={styles.text}>Empresa Nome</Text>
          </View>
        </View>

        <TouchableOpacity>
          <Text style={styles.vermais}>Ver Mais...</Text>
        </TouchableOpacity>

        <Text style={styles.negociotext}>Tem seu próprio negócio?</Text>

        <Image source={negocioimage} style={styles.negocioimg} />

        <TouchableOpacity style={styles.cadastrar}>
          <Text style={styles.cadastrartext}>Cadastrar</Text>
        </TouchableOpacity>
      </ScrollView>
      {/*Fim da scroll home*/}
    </>
  );
}

{
  /*Estilização*/
}
