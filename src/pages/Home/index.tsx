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
import { Carousel } from "../../components/Carousel";
import { Slider } from "../../components/Slider";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import imageproto from "../../../assets/imageproto.png";
import negocioimage from "../../../assets/negocioimage.jpg";
import Toolbar from "../../components/Toolbar";

import { styles } from "./styles";

import OpenModal from "../../components/Modal";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
export default function Home() {
  const { navigate } = useNavigation();

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
            <TouchableOpacity
              onPress={() => {
                navigate("Vendedor");
              }}
            >
              <Image source={imageproto} />
            </TouchableOpacity>
            <Text style={styles.text}>Empresa Nome</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigate("Vendedor");
              }}
            >
              <Image source={imageproto} />
            </TouchableOpacity>
            <Text style={styles.text}>Empresa Nome</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigate("Vendedor");
              }}
            >
              <Image source={imageproto} />
            </TouchableOpacity>
            <Text style={styles.text}>Empresa Nome</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigate("Vendedor");
              }}
            >
              <Image source={imageproto} />
            </TouchableOpacity>
            <Text style={styles.text}>Empresa Nome</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigate("Mais");
          }}
        >
          <Text style={styles.vermais}>Ver Mais...</Text>
        </TouchableOpacity>

        <Text style={styles.negociotext}>Tem seu próprio negócio?</Text>

        <Image source={negocioimage} style={styles.negocioimg} />

        <TouchableOpacity style={styles.cadastrar}>
          <Text style={styles.cadastrartext}>Cadastrar</Text>
        </TouchableOpacity>
      </ScrollView>
      {/*Fim da scroll home*/}
      <View style={styles.modal}>
        <OpenModal />
      </View>
    </>
  );
}

{
  /*Estilização*/
}
