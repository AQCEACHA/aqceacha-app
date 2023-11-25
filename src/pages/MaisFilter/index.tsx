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

export default function MaisFilter({ navigation, route }: any) {

  const { idramo } = route.params;

  const {filterData} = useFetch(BASE_URL + `/ramoatv/${idramo}`);

  const { data } = useFetch(BASE_URL + "/vendedor/todos");

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
              </View>
            </View>
          </View>
        </View>
      )}
      showsHorizontalScrollIndicator={false}
    />
  );
}
