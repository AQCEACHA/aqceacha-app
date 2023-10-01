import {View, TextInput} from 'react-native';
import Feather from "@expo/vector-icons/Feather";
import { styles } from "./local";

export default function Local(){
    return(
        <View style={styles.search}>
        <Feather
          name="search"
          size={25}
          color="#10228A"
          style={styles.iconsearch}
        />
        <TextInput
          placeholder="Sua Localização"
          style={styles.searchtext}
        ></TextInput>
      </View>
    );
}