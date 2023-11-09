import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";

import user from "../../../assets/userimg.jpg";

import { styles } from "./config";

import Feather from "@expo/vector-icons/Feather";

import { useNavigation } from "@react-navigation/native";

export default function Config() {
  const { navigate } = useNavigation();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <>
      <View>
        <View style={styles.contentuser}>
          <Image source={user} style={styles.imguser} />
        </View>

        <View style={styles.contenttext}>
          <Text style={styles.nome}>Victor Carbelotti</Text>
          <Text style={styles.email}>email@email.com</Text>
        </View>

        <View style={styles.contentinfo}>
          <View style={styles.textinfo}>
            <View style={styles.itens}>
              <Feather
                name="moon"
                size={30}
                color="#10228A"
                style={styles.iconconfig}
              />
              <Text style={styles.tema}>Tema</Text>
              <Switch
                trackColor={{ false: "#81b0ff", true: "#767577" }}
                thumbColor={isEnabled ? "#f4f3f4" : "#f5dd4b"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                navigate("Conta");
              }}
            >
              <View style={styles.itens}>
                <Feather
                  name="user"
                  size={30}
                  color="#10228A"
                  style={styles.iconconfig}
                />
                <Text style={styles.conta}>Conta</Text>
                <Feather
                  name="chevron-right"
                  size={30}
                  color="#10228A"
                  style={styles.iconconfig}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.sairconta}>
        <Feather
          name="trash-2"
          size={30}
          color="#E03D3D"
          style={styles.iconconfig}
        />
        <Text style={{ color: "#E03D3D", fontFamily: "IMedium" }}>
          Sair da Conta
        </Text>
      </TouchableOpacity>
    </>
  );
}
