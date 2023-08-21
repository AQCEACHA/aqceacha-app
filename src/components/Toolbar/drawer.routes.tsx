import { createDrawerNavigator }  from '@react-navigation/drawer';
import  Feather from '@expo/vector-icons/Feather';
import Toolbar from './index';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen
            name="home"
            component={Toolbar}
            options={{
              drawerIcon:() =>  <Feather name='home'/>,
              drawerLabel: 'inicio'
            }}
                />
        </Drawer.Navigator>
    )
}
