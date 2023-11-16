import { FlatList, TouchableOpacity, Image, Text} from "react-native";

import { useNavigation } from "@react-navigation/native";

import {styles} from './styles';
import useCustomFetch from '../../services/hooks/useFetch';

import {BASE_URL} from "@env";


export default function Empresas() {

  const {data} = useCustomFetch(BASE_URL + '/vendedor/todos')

  const { navigate } = useNavigation();

  console.log(data)

  const numColumns = 2;



  return (
    <FlatList
      data={data}
      numColumns={numColumns} // Mostrar 2 itens por linha
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => {
            navigate("Vendedor");
          }}
        >
          <Image source={{uri: item.imgven}} resizeMode="contain" style={styles.img} />
          <Text style={styles.text}>{item.apelidoven}</Text>
          </TouchableOpacity>
      )}
      keyExtractor={(item) => item.idven}
      showsHorizontalScrollIndicator={false}
    />
    );
        }
