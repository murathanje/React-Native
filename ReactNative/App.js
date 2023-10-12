import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import UsersScreen from './src/screens/Users';
import UserDetail from './src/screens/UserDetail';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Users'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Anasayfa" }}
        />

        <Stack.Screen
          name="Users"
          component={UsersScreen}
          options={{
            title: "Kullanıcılar", 
            headerStyle: {
              backgroundColor: "#faefdd",
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            }, 
            headerTitleAlign: 'center',
            
          }}
        />

        <Stack.Screen
          name="UserDetail"
          component={UserDetail}
          options={({ route }) => ({ title: route.params.name, headerTitleAlign: 'center' })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;