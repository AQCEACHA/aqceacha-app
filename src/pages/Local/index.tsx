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

import useCustomFetch from "../../services/hooks/useFetch";

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

  const { data } = useCustomFetch(BASE_URL + "/cidade?uf=AC");

  const [expanded, setExpanded] = useState(false);

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
        renderItem={({ item }) => (
          <>
            <ListItem.Accordion
              content={
                <ListItem.Content>
                  <ListItem.Title>{item}</ListItem.Title>
                </ListItem.Content>
              }
              isExpanded={expanded}
              onPress={() => {
                setExpanded(!expanded);
              }}
            >
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <Text>{item.cidade}</Text>
                )}
                keyExtractor={(item) => item.id}
              />
            </ListItem.Accordion>
          </>
        )}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
}
