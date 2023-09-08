import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feather from "@expo/vector-icons/Feather";

import Config from '../../pages/Home/Screens/config';

const Stack = createNativeStackNavigator();


export default function StackRoutes(){
    return(

        <Stack.Navigator screenOptions={{title: ''}}>
            <Stack.Screen name='config' component={Config}></Stack.Screen>
        </Stack.Navigator>

    );
}

