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
import modalimg from "../../../assets/user.png";

import { styles } from "./styles";

export default function OpenModal() {
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
              <Text style={styles.modalText}>Infos</Text>
            </View>
            <View>
              <View style={styles.conteudo}>
                <Text>Qualquer coisa pq sou preguiçoso</Text>
                <Text>Qualquer coisa pq sou preguiçoso</Text>

                <Text>Qualquer coisa pq sou preguiçoso</Text>

                <Text>Qualquer coisa pq sou preguiçoso</Text>

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
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        ></TouchableOpacity>
      </Modal>

      <TouchableOpacity
        style={styles.info}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ fontFamily: "Inter_600SemiBold" }}>Infos</Text>
      </TouchableOpacity>
    </View>
  );
}
