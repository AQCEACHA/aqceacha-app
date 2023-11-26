import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import user from "../../../assets/userimg.jpg";

import { styles } from "./conta";

import Feather from "@expo/vector-icons/Feather";

export default function Conta() {
  const [nome, onChangeName] = React.useState("Mariana Rove");
  const [data, onChangeData] = React.useState("21/12/2005");
  const [email, onChangeEmail] = React.useState("mariana@email.com");
  const [cpf, onChangeCpf] = React.useState("110.203.403-00");
  const [senha, onChangeSenha] = React.useState("");

  return (
    <>
      <View style={styles.contentuser}>
        <Image source={{uri: 'https://media.licdn.com/dms/image/D4D03AQFX57XixYWqsg/profile-displayphoto-shrink_800_800/0/1680491887876?e=2147483647&v=beta&t=fotTmaXLrCleHD0jSvOsG0_ew7Mzj_AdCKmiL1rdFWc'}} style={styles.imguser} />
      </View>
      <TouchableOpacity style={styles.edit}>
        <Feather name="edit-2" size={30} color="#10228A" />
        </TouchableOpacity>
      <View style={styles.maincontent}>
        <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 8 }}>
          <Feather name="user" size={30} color="#10228A" />
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={nome}
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 8 }}>
          <Feather name="smile" size={30} color="#10228A" />
          <TextInput
            style={styles.input}
            onChangeText={onChangeData}
            value={data}
            keyboardType="numeric"
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 8 }}>
          <Feather name="mail" size={30} color="#10228A" />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={onChangeEmail}
            value={email}
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 8 }}>
          <Feather name="credit-card" size={30} color="#10228A" />
          <TextInput
            style={styles.input}
            onChangeText={onChangeCpf}
            keyboardType="numeric"
            value={cpf}
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 8 }}>
          <Feather name="lock" size={30} color="#10228A" />
          <TextInput
            style={styles.input}
            onChangeText={onChangeSenha}
            placeholder="Nova Senha"
            value={senha}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.salvar}>
        <Text style={{fontFamily: 'ISemi', color:'white'}}>Salvar</Text>
      </TouchableOpacity>
    </>
  );
}
