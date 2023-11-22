import React, { useState } from "react";

import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { styles } from "./local";

import { BASE_URL } from "@env";

import useCustomFetch, { useFetch } from "../../services/hooks/useFetch";

import { ListItem } from "@rneui/themed";

export default function Local() {
  const estados = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RM",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
    "DF",
  ];

  const [estadosexpanded, setEstadosexpanded] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);



  let {data}: any = useFetch(BASE_URL + `cidade?uf=SP`);
  return (
    <>
      <View style={styles.search}>
        <Feather
          name="search"
          size={25}
          color="#10228A"
          style={styles.iconsearch}
        />
        <TextInput
          placeholder="Sua Localização"
          style={styles.searchtext}
        ></TextInput>
      </View>

      <FlatList
        data={estados}
        renderItem={({ item, index }) => (
          <>
            <ListItem.Accordion
              content={
                <ListItem.Content>
                  <ListItem.Title>{item}</ListItem.Title>
                </ListItem.Content>
              }
              isExpanded={estadosexpanded[index]}
              onPress={() => {
                const aux = estadosexpanded
                aux[index] = !estadosexpanded[index]
                console.log(aux)
                setEstadosexpanded([...aux])
              }}
            >
              {
                data && data.content && <FlatList
                data={data.content}
                renderItem={({ item }) => (
                  <Text>{item.nomecidade}</Text>
                )}
                keyExtractor={(item) => item.id}
              />
              }
            </ListItem.Accordion>
          </>
        )}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
}
