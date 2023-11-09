import React from "react";
import 'react-native-gesture-handler';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";

import {Routes} from './src/routes';

import { QueryClient, QueryClientProvider } from "react-query";

/*Fontes*/

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_500Medium,
} from "@expo-google-fonts/inter";


export default function App() {
  const [fontLoaded] = useFonts({
    'IRegular': Inter_400Regular,
    'ISemi': Inter_600SemiBold,
    'IMedium': Inter_500Medium,
  });

  if (!fontLoaded) {
    return null;
  }

  /* App */
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Routes/>
    </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  }
});
