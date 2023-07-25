import React from "react";
import { View, Text, Button } from "react-native";


function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screens</Text>
            <Button title="Users" onPress={() => navigation.navigate("Users")} />
        </View>
    );
} 

export default HomeScreen;