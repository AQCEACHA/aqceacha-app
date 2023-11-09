import { FlatList, TouchableOpacity, Image, Text} from "react-native";

import imageproto from "../../../assets/imageproto.png";

import test from '../../../assets/testimage.png';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import {styles} from './styles';
import useCustomFetch from '../../services/hooks/useFetch';

const DATA = [
  {
    empresa: "Cameraman",
    image: test,
  },
  {
    empresa: "Empresa Nome",
    image: imageproto,
  },
  {
    empresa: "Empresa Nome",
    image: imageproto,
  },
    {
    empresa: "Empresa Nome",
    image: imageproto,
  },
];

export default function Empresas() {

  const {data} = useCustomFetch('http://10.68.21.126:8080/vendedor/todos')

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
          <Text style={styles.text}>{item.nomeven}</Text>
          </TouchableOpacity>
      )}
      showsHorizontalScrollIndicator={false}
    />
    );
        }
