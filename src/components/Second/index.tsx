import React, { useState } from "react";
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
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import modalimg from "../../../assets/outro.png";

import { styles } from "./styles";

export default function Second() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.modal}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <View style={styles.topo}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Feather name="chevron-left" size={35} color={"#BBB6B6"} />
              </TouchableOpacity>
            </View>
            <View style={styles.information}>
              <Image source={modalimg} style={styles.modalimg} />
              <View style={styles.textinfo}>
                <Text style={{ fontFamily: "Inter_600SemiBold" }}>Nome</Text>
                <Text style={{ fontFamily: "Inter_400Regular" }}>
                  email@gmail.com
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.conteudo}>
                <TouchableOpacity>
                  <View style={styles.cidade}>
                    <Feather name="map-pin" size={25} color="white" />
                    <Text
                      style={{
                        color: "white",
                        fontFamily: "Inter_600SemiBold",
                        marginLeft: 10,
                      }}
                    >
                      Lençóis Paulista - SP
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={styles.itens}>
                    <Feather
                      name="file-text"
                      size={30}
                      color="#10228A"
                      style={styles.icontoolbar}
                    />
                    <Text style={styles.textitens}>Pedidos</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={styles.itens}>
                    <Feather
                      name="phone"
                      size={30}
                      color="#10228A"
                      style={styles.icontoolbar}
                    />
                    <Text style={styles.textitens}>Telefone</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
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
