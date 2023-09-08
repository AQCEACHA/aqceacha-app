import React from "react";
import 'react-native-gesture-handler';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";

import  Home  from "./src/pages/Home";
import Toolbar from "./src/components/Toolbar";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_500Medium,
} from "@expo-google-fonts/inter";


export default function App() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_500Medium,
  });

  if (!fontLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
  }
});
