import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import HomeScreen from '../screens/Home/';
import UsersScreen from '../screens/Users';
import UserDetail from '../screens/UserDetail';


const HomeStack = createNativeStackNavigator();

export function HomeStackNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
        </HomeStack.Navigator>
    );
}

const UsersStack = createNativeStackNavigator();

export function UsersStackNavigator() {
    return (
        <UsersStack.Navigator>
            <UsersStack.Screen name="Users" component={UsersScreen} />
            <UsersStack.Screen name="UserDetail" component={UserDetail} />
        </UsersStack.Navigator>
    );
}
