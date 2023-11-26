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

export default function MaisFilter({ navigation, route }: any) {
  const { nomeramo } = route.params;
  const { data } = useFetch(BASE_URL + `/vendedor?ramo=${nomeramo}`);
  const { navigate } = useNavigation();

  const [uniqueVendedorIds, setUniqueVendedorIds] = useState<number[]>([]);

  useEffect(() => {
    // Initialize the set with existing vendedor IDs
    const existingIds = data?.content?.map((vendedor: any) => vendedor.idven) || [];
    setUniqueVendedorIds(existingIds);
  }, [data]);

  const handleVendedorPress = (idven: number) => {
    // Navigate to the Vendedor screen when a vendedor is pressed
    navigation.navigate("Vendedor", {
      idven: idven,
    });
  };

  return (
    <FlatList
      data={data && data.content}
      renderItem={({ item }) => {
        if (!uniqueVendedorIds.includes(item.idven)) {
          // If the vendedor ID is not in the array, render it and update the state
          setUniqueVendedorIds((prevIds) => [...prevIds, item.idven]);

          return (
            <View style={styles.images}>
              <TouchableOpacity onPress={() => handleVendedorPress(item.idven)}>
                <Image source={{ uri: item.imgven }} style={styles.img} />
              </TouchableOpacity>
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
          );
        }

        // If the vendedor ID is in the array, return null to render nothing
        return null;
      }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
