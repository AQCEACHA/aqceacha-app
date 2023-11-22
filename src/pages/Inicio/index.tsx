import React from "react";

import { styles } from "./inicio";
import { Image, View, Text, TouchableOpacity } from "react-native";

import aqceacha from "../../../assets/utils/aqceacha.png";

import image from "../../../assets/utils/login.png";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function Inicio() {
  const { navigate } = useNavigation();
  return (
    <View>
      <View>
        <Image source={aqceacha} style={styles.topoImg} />
      </View>

      <View>
        <Image source={image} style={styles.meioImg} />
      </View>

      <View style={styles.content}>
        <Text style={{ fontFamily: "IRegular", fontSize: 20 }}>
          Bem-Vindo(a)
        </Text>
        <Text
          style={{ fontFamily: "IRegular", color: "#525252", fontSize: 16 }}
        >
          O que você procura, AqCeAcha
        </Text>
      </View>

      <View style={styles.botoesContainer}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            navigate("LoginCli");
          }}
        >
          <Text style={styles.botaoText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            navigate("CadastroCli");
          }}
        >
          <Text style={styles.botaoText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.negocio}>
        <Text style={{ fontFamily: "IRegular", fontSize: 16 }}>
          Tem seu próprio negócio?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigate("CadastroVen"); // arrumar a rota
          }}
        >
          <Text style={{ fontFamily: "ISemi", color: "#1429A6", fontSize: 16 }}>
            Cadastre Aqui
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
