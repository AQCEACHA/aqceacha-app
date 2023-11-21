import React, {useState} from 'react';

import {View, TextInput, FlatList, TouchableOpacity, Text} from 'react-native';
import Feather from "@expo/vector-icons/Feather";
import { styles } from "./local";

import {BASE_URL} from "@env";

import useCustomFetch from '../../services/hooks/useFetch';

import { ListItem } from '@rneui/themed';


export default function Local(){

  const {data} = useCustomFetch(BASE_URL + '/cidade/todos')
  const estados = ['AC','AL','AP','AM','BA','CE','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RM','RS','RO','RR','SC','SP','SE','TO', 'DF'];
  const uniqueUFs = new Set();

  const [expanded, setExpanded] = useState(false)




    return(
      <>
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

<ListItem.Accordion
  content={
    <>
      <FlatList
      data={estados}
      renderItem={({ item }) => (
        <TouchableOpacity
        >
        <Text>{item}</Text>
          </TouchableOpacity>
      )}
      keyExtractor={(item) => item}
      showsHorizontalScrollIndicator={false}
    />
    </>
  }
  isExpanded={expanded}
  onPress={() => {
    setExpanded(!expanded);
  }}
>

  <Text>aaaa</Text>
  {/* {list2.map((l, i) => (
    <ListItem key={i} onPress={log} bottomDivider>
      <Avatar title={l.name[0]} source={{ uri: l.avatar_url }} />
      <ListItem.Content>
        <ListItem.Title>{l.name}</ListItem.Title>
        <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  ))} */}
</ListItem.Accordion>

      </>
    );
}
