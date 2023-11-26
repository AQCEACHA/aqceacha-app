import React from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";

import user from "../../../assets/userimg.jpg";

import { styles } from "./config";

import Feather from "@expo/vector-icons/Feather";

import { useNavigation } from "@react-navigation/native";
import { useFetch } from "../../services/hooks/useFetch";
import { BASE_URL } from "@env";


export default function Config() {
  const { navigate } = useNavigation();

  const { data } = useFetch(BASE_URL + `/cliente/todos`);

  console.log(data);

  return (
    <>
      <View>
        <View style={styles.contentuser}>
          <Image source={{uri: 'https://media.licdn.com/dms/image/D4D03AQFX57XixYWqsg/profile-displayphoto-shrink_800_800/0/1680491887876?e=2147483647&v=beta&t=fotTmaXLrCleHD0jSvOsG0_ew7Mzj_AdCKmiL1rdFWc'}} style={styles.imguser} />
        </View>

        <View style={styles.contenttext}>
          {data && data.map((cliente:any) => (
            <React.Fragment key={cliente.idcli}>
              <Text style={styles.nome}>{cliente.nomecli}</Text>
              <Text style={styles.email}>{cliente.emailcli}</Text>
            </React.Fragment>
          ))}
        </View>

        <View style={styles.contentinfo}>
          <View style={styles.textinfo}>
            <TouchableOpacity
              onPress={() => {
                navigate("Conta");
              }}
            >
              <View style={styles.itens}>
                <Feather
                  name="user"
                  size={30}
                  color="#10228A"
                  style={styles.iconconfig}
                />
                <Text style={styles.conta}>Conta</Text>
                <Feather
                  name="chevron-right"
                  size={30}
                  color="#10228A"
                  style={styles.iconconfig}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.sairconta}>
        <Feather
          name="trash-2"
          size={30}
          color="#E03D3D"
          style={styles.iconconfig}
        />
        <Text style={{ color: "#E03D3D", fontFamily: "IMedium" }}>
          Sair da Conta
        </Text>
      </TouchableOpacity>
    </>
  );
}
