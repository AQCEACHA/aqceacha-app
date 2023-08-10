import { StyleSheet, SafeAreaView, StatusBar, View, TextInput } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Home from "./src/pages/Home";
import { wrap } from "module";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Home />
      <View style={styles.search}>
      <Feather name="search" size={25} color="#10228A" style={styles.iconsearch}/>
      <TextInput></TextInput>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
  },
  search: {
    alignContent: 'center',
    marginTop: 24,
    marginBottom: 24,
    backgroundColor: 'white',
    alignSelf: 'center',
    height: 24,
    width: 312,
    borderRadius: 25,
  },
  iconsearch: {

  }
});
