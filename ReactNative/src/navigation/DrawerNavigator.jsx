import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { UsersStackNavigator } from './StackNavigator';
import  TabNavigator  from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Homes" component={TabNavigator} />
      <Drawer.Screen name="User" component={UsersStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
