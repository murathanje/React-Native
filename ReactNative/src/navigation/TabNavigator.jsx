import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeStackNavigator, UsersStackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === 'HomeTab') {
                    iconName = 'home-outline';
                } else if (route.name === 'UsersTab') {
                    iconName = 'people-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        })}
    >
        <Tab.Screen name="HomeTab" component={HomeStackNavigator} options={{ tabBarBadge: 3, title: "Home" }} />
        <Tab.Screen name="UsersTab" component={UsersStackNavigator} options={{ tabBarBadge: 30, title: "Users" }} />
    </Tab.Navigator>
);

export default BottomTabNavigator;
