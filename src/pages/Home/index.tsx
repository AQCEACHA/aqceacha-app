import React, {useEffect, useState} from "react";
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
import negocioimage from "../../../assets/negocioimage.jpg";
import Toolbar from "../../components/Toolbar";

import { styles } from "./styles";

import OpenModal from "../../components/Modal";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";

import { useGetData } from '../../services/hooks';


const Stack = createNativeStackNavigator();


export default function Home() {

  const { getVendedor, getRamo, getServico, getCidade } = useGetData()
  const [vendedor, setVendedor] = useState([])
  const [ramo, setRamo] = useState([])
  const [servico, setServico] = useState([])
  const [cidade, setCidade] = useState([])

  const callGetData = async () => {
    const vendedorResponse = await getVendedor()
    const ramoResponse = await getRamo()
    const servicoResponse = await getServico()
    const cidadeResponse = await getCidade()

    if (!vendedorResponse.error && !ramoResponse.error && !servicoResponse.error && !cidadeResponse.error) {
      setVendedor(vendedorResponse)
      setRamo(ramoResponse)
      setServico(servicoResponse)
      setCidade(cidadeResponse)
    }
  }

  useEffect(() => {
    callGetData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
          <Empresas/>
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

