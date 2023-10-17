import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

import { styles } from "./mais";

import imageproto from "../../../../assets/imageproto.png";

import Feather from "@expo/vector-icons/Feather";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    empresa: "Empresa Nome",
  },
];

const Stack = createNativeStackNavigator();

export default function Mais() {
  const { navigate } = useNavigation();

  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <View style={styles.images}>
            <View style={styles.empresa}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigate("Vendedor");
                  }}
                >
                  <Image source={imageproto} />
                </TouchableOpacity>
              </View>
              <View style={styles.info}>
                <Text style={styles.text}>{item.empresa}</Text>
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
                      5
                    </Text>
                  </View>
                  <TouchableOpacity>
                  <Feather name="heart" size={30} color="#E03D3D" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.empresa}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigate("Vendedor");
                  }}
                >
                  <Image source={imageproto} />
                </TouchableOpacity>
              </View>
              <View style={styles.info}>
                <Text style={styles.text}>{item.empresa}</Text>
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
                      5
                    </Text>
                  </View>
                  <TouchableOpacity>
                  <Feather name="heart" size={30} color="#E03D3D" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.empresa}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigate("Vendedor");
                  }}
                >
                  <Image source={imageproto} />
                </TouchableOpacity>
              </View>
              <View style={styles.info}>
                <Text style={styles.text}>{item.empresa}</Text>
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
                      5
                    </Text>
                  </View>
                  <TouchableOpacity>
                  <Feather name="heart" size={30} color="#E03D3D" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.empresa}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigate("Vendedor");
                  }}
                >
                  <Image source={imageproto} />
                </TouchableOpacity>
              </View>
              <View style={styles.info}>
                <Text style={styles.text}>{item.empresa}</Text>
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
                      5
                    </Text>
                  </View>
                  <TouchableOpacity>
                  <Feather name="heart" size={30} color="#E03D3D" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.empresa}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigate("Vendedor");
                  }}
                >
                  <Image source={imageproto} />
                </TouchableOpacity>
              </View>
              <View style={styles.info}>
                <Text style={styles.text}>{item.empresa}</Text>
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
                      5
                    </Text>
                  </View>
                  <TouchableOpacity>
                  <Feather name="heart" size={30} color="#E03D3D" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        </View>
      )}
      showsHorizontalScrollIndicator={false}
    />
  );
}
