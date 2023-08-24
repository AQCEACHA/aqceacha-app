import Page1 from './pages/Home/Screens/config';
import Page2 from './pages/Home/Screens/pedidos';
import { AppRegistry } from "react-native";
import { name as appName } from "../app.json";

import Routes from "../src";

AppRegistry.registerComponent(appName, () => Routes);

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Home: Page1,
    About: Page2,
  })
);

export default Routes;
