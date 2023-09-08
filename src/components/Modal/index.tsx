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
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Feather name="chevron-left" size={35} color={"#BBB6B6"} />
              </TouchableOpacity>
              <Text style={styles.modalText}>Favoritos</Text>
            </View>
            <ScrollView>
            <View style={styles.conteudo}>
              <View>
                <Image source={modalimg} style={styles.modalimg} />
                <Text style={styles.text}>empresa nome</Text>
              </View>
              <View>
                <Image source={modalimg} style={styles.modalimg} />
                <Text style={styles.text}>empresa nome</Text>
              </View>
              <View>
                <Image source={modalimg} style={styles.modalimg} />
                <Text style={styles.text}>empresa nome</Text>
              </View>
              <View>
                <Image source={modalimg} style={styles.modalimg} />
                <Text style={styles.text}>empresa nome</Text>
              </View>
              <View>
                <Image source={modalimg} style={styles.modalimg} />
                <Text style={styles.text}>empresa nome</Text>
              </View>
              <View>
                <Image source={modalimg} style={styles.modalimg} />
                <Text style={styles.text}>empresa nome</Text>
              </View>
            </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.heart}
        onPress={() => setModalVisible(true)}
      >
        <Feather name="heart" size={30} color={"white"} />
      </TouchableOpacity>
    </View>
  );
}

