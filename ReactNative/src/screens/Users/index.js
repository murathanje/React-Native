import { View, Text, Button, FlatList } from 'react-native'
import React from 'react'
import Item from './item'


const data = [
    {
        id:1,
        name: "Ahmet"
    },
    {
        id:2,
        name: "Murat"
    },
    {
        id:3,
        name: "Alper"
    },

]
const UsersScreen = ({ navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList 
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) =>  <Item item = {item}/>}
      />
    </View>
  )
}

export default UsersScreen;