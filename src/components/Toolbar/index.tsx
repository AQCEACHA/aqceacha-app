import React, { useState, useEffect } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import modalimg from "../../../assets/outro.png";

import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";

import OpenTelefone from "../Telefone";

export default function Toolbar() {
  const { navigate, addListener } = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = addListener("focus", () => {
      // Redefina o estado do modal quando a tela estiver em foco
      setModalVisible(false);
    });

    return unsubscribe;
  }, [addListener]);

  return (
    <View>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View>
          <View style={styles.modalView}>
            <View style={styles.information}>
              <Image source={modalimg} style={styles.modalimg} />
              <View style={styles.textinfo}>
                <Text style={{ fontFamily: "ISemi" }}>Nome</Text>
                <Text style={{ fontFamily: "IRegular" }}>
                  email@gmail.com
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.conteudo}>
                <TouchableOpacity
                  onPress={() => {
                    navigate("Local");
                  }}
                >
                  <View style={styles.cidade}>
                    <Feather name="map-pin" size={25} color="white" />
                    <Text
                      style={{
                        color: "white",
                        fontFamily: "ISemi",
                        marginLeft: 10,
                      }}
                    >
                      Lençóis Paulista - SP
                    </Text>
                  </View>
                </TouchableOpacity>

                <View>
                  <OpenTelefone/>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    navigate("Config");
                  }}
                >
                  <View style={styles.itens}>
                    <Feather
                      name="settings"
                      size={30}
                      color="#10228A"
                      style={styles.icontoolbar}
                    />
                    <Text style={styles.textitens}>Configurações</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={styles.itens}>
                    <Feather
                      name="message-square"
                      size={30}
                      color="#10228A"
                      style={styles.icontoolbar}
                    />
                    <Text style={styles.textitens}>Entre em Contato</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={{
            backgroundColor: "#000000",
            opacity: 0.5,
            alignSelf: "flex-end",
            width: '100%',
            height: "100%",
            position: "absolute",
          }}
        ></TouchableOpacity>
      </Modal>
      <View style={styles.toolbar}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Feather
            name="menu"
            size={30}
            color="#10228A"
            style={styles.icontoolbar}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather
            name="bell"
            size={30}
            color="#BBB6B6"
            style={styles.icontoolbar}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
