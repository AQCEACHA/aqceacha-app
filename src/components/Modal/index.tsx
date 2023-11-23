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
  FlatList
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import modalimg from "../../../assets/user.png";

import { styles } from "./styles";

import { BASE_URL } from "@env";

import useCustomFetch from "../../services/hooks/useFetch";

export default function OpenModal() {

  const { data } = useCustomFetch(BASE_URL + "/cliente");

  console.log(data)


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
            {/* <ScrollView>
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
            </ScrollView> */}
            <FlatList
        data={data && data.content && data.content}
        renderItem={({ item }) => (
          <View style={styles.conteudo}>
          <View>
            <Image source={{uri: item.imgven}} style={styles.modalimg} />
            <Text style={styles.text}>{item.nomeven}</Text>
          </View>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
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
        style={styles.heart}
        onPress={() => setModalVisible(true)}
      >
        <Feather name="heart" size={30} color={"white"} />
      </TouchableOpacity>
    </View>
  );
}

