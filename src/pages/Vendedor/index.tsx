import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import user from "../../../assets/testimage.png";

import { styles } from "./vendedor";

import pic1 from "../../../assets/teste/pic1.png";
import pic2 from "../../../assets/teste/pic2.png";

import Contatar from "../../components/Contatar";
import Infos from "../../components/Infos";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";

import prop from "../../../assets/teste/prop.png";

import { BASE_URL } from "@env";

import useCustomFetch from "../../services/hooks/useFetch";
import { useParams } from "react-router-dom";

const DATA = [
  {
    servico: "Ensaio de Fotos",
    preco: "R$ 80,00",
    img: prop,
  },
  {
    servico: "Gravação de Vídeo",
    preco: "R$ 120,00",
    img: prop,
  },
];

const Stack = createNativeStackNavigator();

export default function Vendedor({route, navigation}: any) {
  const { idven }  = route.params

  const { data } = useCustomFetch(BASE_URL + `/vendedor/${idven}`);


  const { navigate } = useNavigation();

  return (
    <>

      <View style={styles.maincontent}>
        <View style={styles.contentven}>
            <Image source={{uri: data && data.imgven}} style={styles.imgven} />
          <View style={styles.profile}>
          <Text style={{ fontFamily: "IRegular", fontSize: 20 }}>
              {data && data.apelidoven}
            </Text>


            <Text style={{ fontFamily: "IRegular", fontSize: 14, color: '#525252' }}>{data && data.ramo}</Text>
            <Text style={{ fontFamily: "IRegular", fontSize: 14, color: '#B1AEAE' }}>{data && data.nomeven}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Infos />
          <Contatar email={data && data.emailven} telefone={data && data.telefoneven} nome={data && data.nomeven} />
          {/*
          <TouchableOpacity style={styles.info}>
            <Text style={{ fontFamily: "Inter_600SemiBold" }}>Infos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contatar}>
            <Text style={{ fontFamily: "Inter_600SemiBold", fontSize: 16 }}>Contatar</Text>
          </TouchableOpacity>
          */}
        </View>
        <Text style={styles.desc}>Alguma das minhas fotografias abaixo</Text>

        <View style={styles.images}>
          <Image source={pic1} style={styles.img} />
          <Image source={pic2} style={styles.img} />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigate("ImgMais");
          }}
        >
          <Text style={styles.vermais}>Ver Mais...</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.servicos}>
          {data && data.servicos.map((item: any) =>
           <View style={styles.item}>
           <View style={styles.textitem}>
             <Text style={{ fontFamily: "IRegular" }}>{item.nomeserv}</Text>
             <Text style={{ fontFamily: "IRegular", color: "#14A686" }}>
               {item.precovenda}
             </Text>
           </View>
         </View>)}
      </View>
    </>
  );
}
