import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

import { styles } from "./mais";

import Feather from "@expo/vector-icons/Feather";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";

import useCustomFetch from "../../services/hooks/useFetch";

import { BASE_URL } from "@env";
import { useFetch } from "../../services/hooks/useFetch";

const Stack = createNativeStackNavigator();

import axios from "axios";

export default function MaisFilter({ navigation, route }: any) {
  const { nomeramo } = route.params;

  const { data } = useFetch(BASE_URL + `/vendedor?ramo=${nomeramo}`);

  const { navigate } = useNavigation();

  // Set to keep track of unique idven values
  const uniqueIdvens = new Set<number>();

  // Filter the data to keep only the first occurrence of each idven
  const uniqueData = data?.content.filter((item: any) => {
    if (!uniqueIdvens.has(item.idven)) {
      uniqueIdvens.add(item.idven);
      return true;
    }
    return false;
  });

  return (
    <FlatList
      data={uniqueData}
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
