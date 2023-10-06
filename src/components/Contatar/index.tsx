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

import FontAwesome from "@expo/vector-icons/FontAwesome";

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
              <Text style={styles.modalText}>Contatar</Text>
            </View>
            <ScrollView>
              <View style={styles.conteudo}>
                <View style={styles.item}>
              <FontAwesome name="whatsapp" size={35} color={"#1429A6"} style={{marginLeft:20}} />
              <Text style={styles.text}>(14)99804-0306</Text>
              </View>
              <View style={styles.item}>
              <FontAwesome name="envelope"  size={35} color={"#1429A6"} style={{marginLeft:20}} />
              <Text style={styles.text}>email@gmail.com</Text>
              </View>
              <View style={styles.item}>
              <FontAwesome name="linkedin" size={35} color={"#1429A6"} style={{marginLeft:20}}/>
              <Text style={styles.text}>vitorlopes</Text>
              </View>
              </View>
            </ScrollView>
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
        style={styles.contatar}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ fontFamily: "ISemi", fontSize: 16 }}>
          Contatar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
