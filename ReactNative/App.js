import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import UsersScreen from './src/screens/Users';
import UsersDetail from './src/screens/USersDetail';






const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Anasayfa',
            headerTitleAlign: 'center' // Burada yer alan özellik ile başlığı ortala
          }}
        />
        <Stack.Screen
          name="Users"
          component={UsersScreen}
          options={{
            title: 'Kullanıcılar',
            headerTitleAlign: 'center' // Burada yer alan özellik ile başlığı ortala
          }}
        />
        <Stack.Screen
          name="Detay"
          component={UsersDetail}
          options={{
            title: 'Detay',
            headerTitleAlign: 'center' // Burada yer alan özellik ile başlığı ortala
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;