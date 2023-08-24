import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

import Home from "../../pages/Home";
import Config from "../../pages/Home/Screens/config";
import Pedidos from "../../pages/Home/Screens/pedidos";
import Telefone from "../../pages/Home/Screens/telefone";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <View style={styles.toolbar}>
      <Drawer.Navigator
        screenOptions={{
          title: "",
          headerStyle: {
            shadowColor: "#000",
            shadowOffset: {
              width: vw(0),
              height: vw(4),
            },
            shadowOpacity: vw(0.3),
            shadowRadius: vw(4.65),

            elevation: vw(2),
          },
        }}
      >

        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ color, size }) => (
              <Feather name="home" color={color} size={size} />
            ),
            drawerLabel: "Home",
          }}
        />
        <Drawer.Screen
          name="Pedidos"
          component={Pedidos}
          options={{
            drawerIcon: ({ color, size }) => (
              <Octicons name="checklist" color={color} size={size} />
            ),
            drawerLabel: "Pedidos",
          }}
        />
        <Drawer.Screen
          name="Telefone"
          component={Telefone}
          options={{
            drawerIcon: ({ color, size }) => (
              <Feather name="phone" color={color} size={size} />
            ),
            drawerLabel: "Telefone",
          }}
        />
        <Drawer.Screen
          name="Config"
          component={Config}
          options={{
            drawerIcon: ({ color, size }) => (
              <Feather name="settings" color={color} size={size} />
            ),
            drawerLabel: "Configurações",
          }}
        />
                <Drawer.Screen
          name="Contato"
          component={Config}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="chatbubbles-outline" color={color} size={size} />
            ),
            drawerLabel: "Entre em Contato",
          }}
        />
      </Drawer.Navigator>
      <TouchableOpacity style={styles.bell}>
        <Feather
          name="bell"
          size={30}
          color="#BBB6B6"
          style={styles.icontoolbar}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    flex: 1,
  },
  bell: {
    position: "absolute",
    alignSelf: "flex-end",
  },
  icontoolbar: {
    marginRight: vw(5),
    marginLeft: vw(5),
    marginTop: vw(3),
  },
});
