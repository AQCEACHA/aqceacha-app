import React, { useState } from "react";
import { View, TextInput, Text, Image } from "react-native";
import { styles } from "./search";
import Feather from "@expo/vector-icons/Feather";
import { BASE_URL } from "@env";
import { useFetch } from "../../services/hooks/useFetch";

export default function Search() {
  const [pesquisa, setPesquisa] = useState("");
  const { data } = useFetch(BASE_URL + "/vendedor/todos?nomeven=" + pesquisa);

  console.log(data)

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
          placeholder="O que você está procurando?"
          style={styles.searchtext}
          value={pesquisa}
          onChangeText={setPesquisa}
        />
      </View>
    </>
  );
}
