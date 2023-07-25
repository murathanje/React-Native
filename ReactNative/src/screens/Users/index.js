import { View, Text, Button } from 'react-native'
import React from 'react'

const UsersScreen = ({ navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>index</Text>
            <Button title='Geri' onPress={() => navigation.push("Home")}/>
            <Button title='Geri' onPress={() => navigation.goBack("Home")}/>
        </View>
    )
}

export default UsersScreen