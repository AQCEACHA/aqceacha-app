import React from "react";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";

import user from "../../../../assets/userimg.jpg";

import { styles } from "./config";

import Feather from "@expo/vector-icons/Feather";

export default function Config() {
  return (
    <>
      <View>
        <View style={styles.contentuser}>
          <Image source={user} style={styles.imguser} />
        </View>

        <View style={styles.contenttext}>
          <Text style={styles.nome}>Victor Carbelotti</Text>
          <Text style={styles.email}>email@email.com</Text>
        </View>

        <View style={styles.contentinfo}>
          <View style={styles.textinfo}>
            <TouchableOpacity>
            <View style={styles.itens}>
                    <Feather
                      name="moon"
                      size={30}
                      color="#10228A"
                      style={styles.iconconfig}
                    />
              <Text style={styles.tema}>Tema</Text>
                  </View>
            </TouchableOpacity>
            <TouchableOpacity>
                  <View style={styles.itens}>
                    <Feather
                      name="user"
                      size={30}
                      color="#10228A"
                      style={styles.iconconfig}
                    />
                    <Text style={styles.conta}>Conta</Text>
                  </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
