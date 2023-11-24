import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { BASE_URL } from "@env";
import { useFetch } from "../services/hooks/useFetch";
import { vw } from "react-native-expo-viewport-units";

import { Icon } from "react-native-elements";

import { usePost } from "../services/hooks/useFetch";

import axios from "axios";

export default function HeaderVendedor({ idven }: any) {
  const { data } = useFetch(BASE_URL + `/vendedor/${idven}`);

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
    favorito.fetchData()
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
    favorito.fetchData()
  };

  return (
    <>
      <View style={styles.icon}>
        {favorito && favorito.data && favorito.data ? (
          <TouchableOpacity
            onPress={() => {
              removerFavorito(idven);
            }}
          >
            <Icon name="heart" type="font-awesome" color="#E03D3D" size={25} />
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
        <View style={styles.star}>
          <Feather name="star" size={20} color="#FFA500" />
          <Text
            style={{
              fontFamily: "IRegular",
              color: "#525252",
              marginLeft: 8,
              fontSize: 18,
            }}
          >
            {data && data.star}
          </Text>
        </View>
      </View>
    </>
  );
}

export const styles = StyleSheet.create({
  icon: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    alignItems: "center",
    borderColor: "#BBB6B6",
    borderWidth: 1,
    paddingHorizontal: vw(2),
    borderRadius: 10,
    flexDirection: "row",
    marginLeft: vw(2),
    marginRight: vw(2),
  },
});
