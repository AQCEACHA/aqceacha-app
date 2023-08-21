import React from "react";
import 'react-native-gesture-handler';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";

import  Home  from "./src/pages/Home";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
  }
});
