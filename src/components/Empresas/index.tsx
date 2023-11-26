import { FlatList, TouchableOpacity, Image, Text, View} from "react-native";

import { useNavigation } from "@react-navigation/native";

import {styles} from './styles';
import useCustomFetch from '../../services/hooks/useFetch';

import {BASE_URL} from "@env";
import { useFetch } from '../../services/hooks/useFetch';


export default function Empresas({navigation}: any) {

  const {data} = useFetch(BASE_URL + '/vendedor/todos')

  const { navigate } = useNavigation();
  console.log(data, "bbbbbbbb")

  const numColumns = 2;


  return (
    <>

<View style={styles.content}>
    {data &&
      data.map((item: any) => (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => {
            navigation.navigate("Vendedor", {idven: item && item.idven});
          }}
        >
          <Image source={{uri: item.imgven}} style={styles.img} />
          <Text style={styles.text}>{item.apelidoven}</Text>
          </TouchableOpacity>
      ))}
      </View>

</>
    );
        }
