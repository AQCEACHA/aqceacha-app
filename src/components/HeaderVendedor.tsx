import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { BASE_URL } from '@env';
import { useFetch } from '../services/hooks/useFetch';
import { vw } from 'react-native-expo-viewport-units';
export default function HeaderVendedor({idven}: any) {

    const { data } = useFetch(BASE_URL + `/vendedor/${idven}`);
    return <>
    <View style={styles.icon}>
        <TouchableOpacity>
          <Feather name="heart" size={25} color="#E03D3D" />
        </TouchableOpacity>
        <View style={styles.star}>
          <Feather name="star" size={20} color="#FFA500" />
          <Text
            style={{
              fontFamily: "IRegular",
              color: "#525252",
              marginLeft: 8,
              fontSize: 18,
            }}
          >
            {data && data.star}
          </Text>
        </View>
      </View>
    </>
}

export const styles = StyleSheet.create({
    icon: {
      alignSelf: "flex-end",
      flexDirection: "row",
      alignItems: "center",
    },
    star: {
      alignItems: "center",
      borderColor: "#BBB6B6",
      borderWidth: 1,
      paddingHorizontal: vw(2),
      borderRadius: 10,
      flexDirection: "row",
      marginLeft: vw(2),
      marginRight: vw(2),
    },
  });
  