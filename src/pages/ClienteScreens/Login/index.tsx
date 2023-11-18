import React, { useState } from "react";

import { styles } from "./login";
import { Image, View, Text, TouchableOpacity, TextInput } from "react-native";

import aqceacha from "../../../../assets/utils/aqceacha.png";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";

import Checkbox from "expo-checkbox";

import signin from "../../../../assets/utils/signin(2).png";

const Stack = createNativeStackNavigator();

export default function LoginCli() {
  const [isChecked, setChecked] = useState(false);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { navigate } = useNavigation();

  return (
    <>
      <View>
        <Image source={aqceacha} style={styles.topoImg} />
      </View>

      <View style={styles.login}>
        <View>
          <Text style={{ fontFamily: "IRegular", fontSize: 16 }}>
            Insira seu email
          </Text>
          <TextInput
            placeholder="exemplo@gmail.com"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>
        <View>
          <Text style={{ fontFamily: "IRegular", fontSize: 16 }}>
            Digite sua senha
          </Text>
          <TextInput
            placeholder="min. 8 caraceteres"
            value={senha}
            onChangeText={setSenha}
            style={styles.input}
          />
        </View>

        <View style={styles.check}>
          <Checkbox
            style={{ backgroundColor: "transparent", width: 25, height: 25 }}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#1429A6" : undefined}
          />
          <Text style={{ fontFamily: "IRegular", fontSize: 14, marginLeft: 8 }}>
            Lembrar-me
          </Text>
        </View>
      </View>

      <View style={styles.entrar}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            navigate("Home");
          }}
        >
          <Text style={styles.botaoText}>Entrar</Text>
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "IRegular",
            color: "#444444",
            fontSize: 16,
            marginVertical: 12,
          }}
        >
          ou
        </Text>

        <TouchableOpacity>
          <Image source={signin} style={{ width: 220, height: 30 }} />
        </TouchableOpacity>
      </View>

      <View style={styles.esqueceu}>
        <Text
          style={{
            fontFamily: "IRegular",
            fontSize: 16,
          }}
        >
          Esqueceu a senha?
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: "IRegular",
              color: "#1429A6",
              fontSize: 16,
            }}
          >
            Clique aqui
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
