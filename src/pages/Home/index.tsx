import React, { useEffect, useState } from "react";
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
import Empresas from "../../components/Empresas";
import negocioimage from "../../../assets/negocioimage.png";
import Toolbar from "../../components/Toolbar";

import { styles } from "./home";

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
        <TouchableOpacity
          onPress={() => {
            navigate("Search");
          }}
          style={styles.search}
        >
          <Feather
            name="search"
            size={25}
            color="#10228A"
            style={styles.iconsearch}
          />
          <Text style={styles.searchtext}>O que você está procurando?</Text>
        </TouchableOpacity>

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
          <Empresas />
        </View>

        <TouchableOpacity
          onPress={() => {
            navigate("Mais");
          }}
        >
          <Text style={styles.vermais}>Ver Mais...</Text>
        </TouchableOpacity>

        <Text style={styles.negociotext}>Tem seu próprio negócio?</Text>

        <Image
          source={negocioimage}
          style={styles.negocioimg}
          resizeMode="contain"
        />

        <TouchableOpacity
          style={styles.cadastrar}
          onPress={() => {
            navigate("Cadastro");
          }}
        >
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
