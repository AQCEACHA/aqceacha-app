import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import user from "../../../../assets/userimg.jpg";

import { styles } from "./vendedor";

import imageproto from "../../../../assets/imageproto.png";

import example from '../../../../assets/example.jpg';

import Contatar from '../../../components/Contatar';
import Infos from '../../../components/Infos';


const DATA = [
  {
    servico: "Manuntenção de Computadores",
    preco: "R$ 60,00",
  },
];

export default function Vendedor() {
  return (
    <>
      <View style={styles.maincontent}>
        <View style={styles.contentven}>
          <Image source={user} style={styles.imgven} />
          <Text style={styles.name}>Vitor Lopes Nunes</Text>
        </View>
        <View style={styles.row}>
          <Infos/>
          <Contatar/>
          {/*
          <TouchableOpacity style={styles.info}>
            <Text style={{ fontFamily: "Inter_600SemiBold" }}>Infos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contatar}>
            <Text style={{ fontFamily: "Inter_600SemiBold", fontSize: 16 }}>Contatar</Text>
          </TouchableOpacity>
          */}
        </View>
        <Text style={styles.desc}>Descrição Vai Aqui</Text>

        <View style={styles.images}>
          <Image source={imageproto} />
          <Image source={imageproto} />
        </View>
        <TouchableOpacity>
          <Text style={styles.vermais}>Ver Mais...</Text>
        </TouchableOpacity>
      </View>
      <FlatList 
              data={DATA}
      renderItem={({ item }) => (
        <View style={styles.servicos}>
          <View style={styles.item}>
            <View style={styles.textitem}>
              <Text style={{fontFamily: 'Inter_400Regular'}}>{item.servico}</Text>
              <Text style={{fontFamily: 'Inter_400Regular', color: '#14A686'}}>{item.preco}</Text>
            </View>
            <Image source={example} style={styles.imgserv}/>
          </View>
          <View style={styles.item}>
            <View style={styles.textitem}>
              <Text style={{fontFamily: 'Inter_400Regular'}}>{item.servico}</Text>
              <Text style={{fontFamily: 'Inter_400Regular', color: '#14A686'}}>{item.preco}</Text>
            </View>
            <Image source={example} style={styles.imgserv}/>
          </View>
          <View style={styles.item}>
            <View style={styles.textitem}>
              <Text style={{fontFamily: 'Inter_400Regular'}}>{item.servico}</Text>
              <Text style={{fontFamily: 'Inter_400Regular', color: '#14A686'}}>{item.preco}</Text>
            </View>
            <Image source={example} style={styles.imgserv}/>
          </View>
        </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
}
