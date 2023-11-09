import { Text, View } from "react-native";

import { styles } from "./notification";

import Feather from "@expo/vector-icons/Feather";


export default function Notification() {
  return (
    <View style={styles.content}>
      <View>
        <Feather name="smile" size={35} color="#10228A" />
      </View>
      <View style={styles.text}>
        <Text style={{fontFamily: 'IRegular', fontSize: 20}}>Bem Vindo!</Text>
        <Text style={{fontFamily: 'IRegular', fontSize: 15, color: '#525252'}}>O que você procura, aqceacha</Text>
        <Text style={{fontFamily: 'IRegular', fontSize: 15, color: '#BBB6B6'}}>27/11/2023</Text>
      </View>
    </View>



  );
}
