import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Config from "../pages/Config";
import Home from "../pages/Home";
import Conta from "../pages/Conta";
import Local from "../pages/Local";
import Mais from "../pages/Mais";
import Vendedor from "../pages/Vendedor";
import ImgMais from "../pages/imgMais";
import Search from "../pages/Search/index";
import Notification from "../pages/Notification";

import Feather from "@expo/vector-icons/Feather";

import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import CadastroCli from "../pages/ClienteScreens/Cadastro/index";
import Inicio from "../pages/Inicio";
import LoginCli from "../pages/ClienteScreens/Login";
import CadastroVen from "../pages/EmpresaScreens/Cadastro/index";


const Stack = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Config: undefined;
      Conta: undefined;
      Local: undefined;
      Mais: undefined;
      Vendedor: undefined;
      ImgMais: undefined;
      Search: undefined;
      Notification: undefined;
      LoginCli: undefined; //Colocar Cli ou Ven na frente para diferenciar sempre, segue o padrão
      CadastroCli: undefined; //Colocar Cli ou Ven na frente para diferenciar sempre, segue o padrão
      CadastroVen: undefined; //Colocar Cli ou Ven na frente para diferenciar sempre, segue o padrão
      Inicio: undefined;
    }
  }
}

const CustomHeader = ({ navigation }: { navigation: any }) => {
  return {
    headerTitle: "",
    headerRight: () => (
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
            5
          </Text>
        </View>
      </View>
    ),
    headerLeft: () => (
      <Feather
        name="chevron-left"
        size={34}
        color="#1429A6"
        onPress={() => {
          navigation.goBack(); // Isso volta para a tela anterior
        }}
      />
    ),
    headerStyle: {
      backgroundColor: '#FAFAFA', // Define a cor de fundo da barra de navegação
    },
    headerTitleStyle: {
      fontFamily: 'ISemi', color: '#525252' // Define a fonte do título da barra de navegação
    },
  };
};

const CustomName = ({ navigation }: { navigation: any }) => {
  return {
    headerTitle: "Mais Fotos",
    headerLeft: () => (
      <Feather
        style={{ marginRight: vw(4) }}
        name="chevron-left"
        size={34}
        color="#1429A6"
        onPress={() => {
          navigation.goBack(); // Isso volta para a tela anterior
        }}
      />
    ),
    headerStyle: {
      backgroundColor: '#FAFAFA', // Define a cor de fundo da barra de navegação
    },
    headerTitleStyle: {
      fontFamily: 'ISemi', color: '#525252' // Define a fonte do título da barra de navegação
    },
  };
};

const CustomMain = ({ navigation }: { navigation: any }) => {
  return {
    headerLeft: () => (
      <Feather
        style={{ marginRight: vw(4) }}
        name="chevron-left"
        size={34}
        color="#1429A6"
        onPress={() => {
          navigation.goBack(); // Isso volta para a tela anterior
        }}
      />
    ),
    headerStyle: {
      backgroundColor: '#FAFAFA', // Define a cor de fundo da barra de navegação
    },
    headerTitleStyle: {
      fontFamily: 'ISemi', color: '#525252' // Define a fonte do título da barra de navegação
    },
  };
};

const CustomLocal = ({ navigation }: { navigation: any }) => {
  return {
    headerTitle: "Localização",
    headerLeft: () => (
      <Feather
        style={{ marginRight: vw(4) }}
        name="chevron-left"
        size={34}
        color="#1429A6"
        onPress={() => {
          navigation.goBack(); // Isso volta para a tela anterior
        }}
      />
    ),
    headerStyle: {
      backgroundColor: '#FAFAFA', // Define a cor de fundo da barra de navegação
    },
    headerTitleStyle: {
      fontFamily: 'ISemi', color: '#525252' // Define a fonte do título da barra de navegação
    },
  };
};

const CustomSearch = ({ navigation }: { navigation: any }) => {
  return {
    headerTitle: "Pesquisar",
    headerLeft: () => (
      <Feather
        style={{ marginRight: vw(4) }}
        name="chevron-left"
        size={34}
        color="#1429A6"
        onPress={() => {
          navigation.goBack(); // Isso volta para a tela anterior
        }}
      />
    ),
    headerStyle: {
      backgroundColor: '#FAFAFA', // Define a cor de fundo da barra de navegação
    },
    headerTitleStyle: {
      fontFamily: 'ISemi', color: '#525252' // Define a fonte do título da barra de navegação
    },
  };
};

const CustomBell = ({ navigation }: { navigation: any }) => {
  return {
    headerTitle: "Notificações",
    headerLeft: () => (
      <Feather
        style={{ marginRight: vw(4) }}
        name="chevron-left"
        size={34}
        color="#1429A6"
        onPress={() => {
          navigation.goBack(); // Isso volta para a tela anterior
        }}
      />
    ),
  };
};


const CustomArrow = ({ navigation }: { navigation: any }) => {
  return {
    headerTitle: "",
    headerLeft: () => (
      <Feather
        style={{ marginRight: vw(4) }}
        name="chevron-left"
        size={34}
        color="#1429A6"
        onPress={() => {
          navigation.goBack(); // Isso volta para a tela anterior
        }}
      />
    ),
    headerStyle: {
      backgroundColor: '#FAFAFA', // Define a cor de fundo da barra de navegação
    },
    headerTitleStyle: {
      fontFamily: 'ISemi', color: '#525252' // Define a fonte do título da barra de navegação
    },
  };
};

const CustomInit = ({ navigation }: { navigation: any }) => {
  return {
    headerTitle: '',
    headerShown: false,
    headerTransparent: true
  };
};

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Config"
          component={Config}
          options={({ navigation }) => CustomMain({ navigation })}
        />
        <Stack.Screen
          name="Conta"
          component={Conta}
          options={({ navigation }) => CustomMain({ navigation })}
        />
        <Stack.Screen
          name="Local"
          component={Local}
          options={({ navigation }) => CustomLocal({ navigation })}
        />
        <Stack.Screen
          name="Mais"
          component={Mais}
          options={({ navigation }) => CustomMain({ navigation })}
        />
        <Stack.Screen
          name="Vendedor"
          component={Vendedor}
          options={({ navigation }) => CustomHeader({ navigation })}
        />
        <Stack.Screen
          name="ImgMais"
          component={ImgMais}
          options={({ navigation }) => CustomName({ navigation })}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={({ navigation }) => CustomSearch({ navigation })}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={({ navigation }) => CustomBell({ navigation })}
        />
        <Stack.Screen
          name="CadastroCli"
          component={CadastroCli}
          options={({ navigation }) => CustomMain({ navigation })}
        />
        <Stack.Screen
          name="CadastroVen"
          component={CadastroVen}
          options={({ navigation }) => CustomMain({ navigation })}
        />
        <Stack.Screen
          name="LoginCli"
          component={LoginCli}
          options={({ navigation }) => CustomArrow({ navigation })}
        />
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={({ navigation }) => CustomInit({ navigation })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

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
