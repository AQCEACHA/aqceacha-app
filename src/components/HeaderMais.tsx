import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { BASE_URL } from "@env";
import { useFetch } from "../services/hooks/useFetch";
import { vw } from "react-native-expo-viewport-units";

export default function HeaderVendedor({ idramo }: any) {
  const { data } = useFetch(BASE_URL + `/ramoatv?idramo=${idramo}`);

  return (
    <>
        
    </>
  );
}