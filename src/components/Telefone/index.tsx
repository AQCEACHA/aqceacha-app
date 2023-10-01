import React, { useState } from "react";
import {
  Alert,
  Modal,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput
} from "react-native";
import Feather from "@expo/vector-icons/Feather";

import { styles } from "./styles";

export default function OpenTelefone() {
    const [number, onChangeNumber] = React.useState("(14)99804-0306");
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
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
              <Text style={styles.modalText}>Verificar Telefone</Text>
            </View>
            <View style={styles.conteudo}>
            <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 8 }}>
          <Feather name="flag" size={30} color="#10228A" />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            keyboardType="numeric"
            value={number}
          />
        </View>

          </View>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.confirmar}>
                <Text style={{fontFamily: 'Inter_600SemiBold', color: 'white'}}>Confirmar</Text>
              </TouchableOpacity>
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
      
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
      >
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
    </View>
  );
}

