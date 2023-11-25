import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

import { styles } from "./mais";

import imageproto from "../../../assets/imageproto.png";

import Feather from "@expo/vector-icons/Feather";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";

import useCustomFetch from "../../services/hooks/useFetch";

import { BASE_URL } from "@env";
import { useFetch } from "../../services/hooks/useFetch";

import { Icon } from "react-native-elements";

const Stack = createNativeStackNavigator();

import axios from "axios";

export default function Mais({ navigation, idven }: any) {

  const { data } = useFetch(BASE_URL + "/vendedor/todos");

  const favorito = useFetch(BASE_URL + `/vendedor/favorito/existe/${idven}`);

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
  });

  const adicionarFavorito = async (id: number) => {
    try {
      await axiosInstance.post(
        BASE_URL + `/vendedor/favorito/${idven}`,
        {},
        { data: {} }
      );
    } catch (err) {
      console.log(err);
    }
    favorito.fetchData();
  };

  const removerFavorito = async (id: number) => {
    try {
      await axiosInstance.post(
        BASE_URL + `/vendedor/favorito/remover/${idven}`,
        {},
        { data: {} }
      );
    } catch (err) {
      console.log(err);
    }
    favorito.fetchData();
  };

  const { navigate } = useNavigation();

  console.log(data);

  return (
    <FlatList
      data={data && data}
      renderItem={({ item }) => (
        <View style={styles.images}>
          <View style={styles.empresa}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Vendedor", {
                    idven: item && item.idven,
                  });
                }}
              >
                <Image source={{ uri: item.imgven }} style={styles.img} />
              </TouchableOpacity>
            </View>
            <View style={styles.info}>
              <Text style={styles.text}>{item.apelidoven}</Text>
              <View style={styles.icon}>
                <View style={styles.star}>
                  <Feather name="star" size={25} color="#FFA500" />
                  <Text
                    style={{
                      fontFamily: "IRegular",
                      color: "#525252",
                      marginLeft: 8,
                      fontSize: 18,
                    }}
                  >
                    {item.star}
                  </Text>
                </View>
                {favorito && favorito.data && favorito.data ? (
                  <TouchableOpacity
                    onPress={() => {
                      removerFavorito(idven);
                    }}
                  >
                    <Icon
                      name="heart"
                      type="font-awesome"
                      color="#E03D3D"
                      size={25}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      adicionarFavorito(idven);
                    }}
                  >
                    <Feather name="heart" size={25} color="#E03D3D" />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </View>
      )}
      showsHorizontalScrollIndicator={false}
    />
  );
}
