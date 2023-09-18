import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Config from '../pages/Screens/Config'
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList{
      Home: undefined;
      Config: undefined;
    }
  }
}

export const Routes = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Config" component={Config} options={{title: 'Configurações'}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

