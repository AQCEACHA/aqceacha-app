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
  FlatList,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import modalimg from "../../../assets/user.png";

import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import { BASE_URL } from "@env";

import useCustomFetch from "../../services/hooks/useFetch";

import axios from "axios";

export default function OpenModal({ navigation }: any) {
  const { navigate } = useNavigation();

  const { data } = useCustomFetch(BASE_URL + "/cliente/1");

  console.log(data && data.favorito[0].favoritoCliente, "aaaaaaaaaaaaaa");

  const [modalVisible, setModalVisible] = useState(false);

  const numColumns = 2;

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
  });

  const getVendedor = async(idfav: number) => {
    try {
      return await axiosInstance.get(BASE_URL + `/vendedor/favorito/get/${idfav}`, {
        data: {},
      });
    } catch (err) {
      console.log(err);
    }
  };

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
            <FlatList
              data={data && data.favorito}
              numColumns={numColumns} // Mostrar 2 itens por linha
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.conteudo}
                  onPress={async () => {
                    const d: any = await getVendedor(item.idfav)
                    navigation.navigate("Vendedor", {
                      idven: d && d.data && d.data.idven//
                    });
                  }}
                >
                  <View>
                    <Image
                      source={{ uri: item.vendedor.imgven }}
                      style={styles.modalimg}
                    />
                    <Text style={styles.text}>{item.vendedor.nomeven}</Text>
                  </View>
                </TouchableOpacity>
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
            width: "100%",
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
