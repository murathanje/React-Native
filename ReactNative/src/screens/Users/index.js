import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Item from "./item"

const data = [
    {
    id: 1,
    name: "Murathan"
    },
    {
        id: 2,
        name: "Mehmet"
    },
    {
        id: 3,
        name: "Ali"
    }
]

const UsersScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <FlatList 
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <Item item = {item}/>}
                />
            </View>
            <View style={{ flex: 1, borderBottomWidth: 1, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ fontSize: 18, color: 'blue' }}>Geri</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UsersScreen