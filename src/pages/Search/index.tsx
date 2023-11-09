import { View, TextInput } from "react-native";

import { styles } from "./search";

import Feather from "@expo/vector-icons/Feather";

export default function Search(){
  return(
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
    ></TextInput>
  </View>
  );
}
