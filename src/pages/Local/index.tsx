import {View, TextInput, FlatList, TouchableOpacity, Text} from 'react-native';
import Feather from "@expo/vector-icons/Feather";
import { styles } from "./local";

import {BASE_URL} from "@env";

import useCustomFetch from '../../services/hooks/useFetch';


export default function Local(){

  const {data} = useCustomFetch(BASE_URL + '/cidade/todos')

    return(
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
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
        >
        <Text>{item.uf}</Text>
          </TouchableOpacity>
      )}
      keyExtractor={(item) => item.idcidade}
      showsHorizontalScrollIndicator={false}
    />

      </>
    );
}
